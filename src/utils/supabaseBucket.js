import { supabase } from '../lib/supabase';

/**
 * Uploads a file to Supabase Storage under `userId/files/` with proper content type detection.
 * @param {File} file - The file to upload.
 * @param {string} userId - The ID of the user uploading the file.
 * @returns {Promise<{path: string, url: string, size: number, type: string, isImage: boolean, isDocument: boolean}>}
 */
export async function uploadFile(file, userId) {
  try {
    console.log(`Uploading file: ${file.name} for user: ${userId}`);

    const filePath = generateFilePath(userId, file.name);
    const contentType = detectContentType(file.name);
    
    const { error } = await supabase.storage
      .from('user-deals')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType
      });

    if (error) throw new Error(`Upload failed: ${error.message}`);

    // Generate public URL
    const publicUrl = getFileUrl(filePath);

    return { path: filePath, url: publicUrl, size: file.size, type: contentType, ...getFileTypeFlags(file.name) };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

/**
 * Deletes a file from Supabase Storage.
 * @param {string} filePath - The path of the file to delete.
 * @returns {Promise<boolean>}
 */
export async function deleteFile(filePath) {
  try {
    console.log(`Deleting file: ${filePath}`);
    const { error } = await supabase.storage
      .from('user-deals')
      .remove([filePath]);

    if (error) throw new Error(`Delete failed: ${error.message}`);
    
    console.log('File deletion successful');
    return true;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

/**
 * Retrieves a list of user files from Supabase Storage.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>}
 */
export async function getUserFiles(userId) {
  try {
    console.log(`Fetching files for user: ${userId}`);
    const { data, error } = await supabase.storage
      .from('user-deals')
      .list(`${userId}/files/`);

    if (error) throw new Error(`Fetch failed: ${error.message}`);

    console.log(`Retrieved ${data.length} files`);
    return data;
  } catch (error) {
    console.error('Get files error:', error);
    throw error;
  }
}

/**
 * Generates a public URL for a file in Supabase Storage.
 * @param {string} filePath - The path of the file.
 * @returns {string} Public URL of the file.
 */
export function getFileUrl(filePath) {
  return supabase.storage.from('user-deals').getPublicUrl(filePath).data.publicUrl;
}

/**
 * Generates a unique file path for uploaded files.
 * @param {string} userId - The user ID.
 * @param {string} fileName - The original file name.
 * @returns {string} The generated file path.
 */
function generateFilePath(userId, fileName) {
  return `${userId}/files/${Date.now()}-${fileName}`;
}

/**
 * Determines the content type based on file extension.
 * @param {string} fileName - The name of the file.
 * @returns {string} The content type.
 */
function detectContentType(fileName) {
  const extension = fileName.split('.').pop().toLowerCase();
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    txt: 'text/plain',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };
  return mimeTypes[extension] || 'application/octet-stream';
}

/**
 * Determines if a file is an image or a document.
 * @param {string} fileName - The name of the file.
 * @returns {{ isImage: boolean, isDocument: boolean }}
 */
function getFileTypeFlags(fileName) {
  const extension = fileName.split('.').pop().toLowerCase();
  return {
    isImage: ['jpg', 'jpeg', 'png', 'webp'].includes(extension),
    isDocument: ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx'].includes(extension)
  };
}

// /**
//  * Downloads a file from Supabase Storage.
//  * @param {string} filePath - The path of the file to download.
//  * @returns {Promise<Blob>} The file data.
//  */
// export async function downloadFile(filePath) {
//   try {
//     console.log(`Downloading file: ${filePath}`);
//     const { data, error } = await supabase.storage
//       .from('user-deals')
//       .download(filePath);

//     if (error) throw new Error(`Download failed: ${error.message}`);

//     return data;
//   } catch (error) {
//     console.error('Download error:', error);
//     throw error;
//   }
// }

/**
 * Downloads a processed file from the processed-files bucket
 * @param {string} fileName - The name of the processed file
 * @returns {Promise<Blob>} The processed file data
 */
export async function downloadProcessedFile(fileName) {
  try {
    console.log(`Downloading processed file: ${fileName}`);
    const { data, error } = await supabase.storage
      .from('processed-files') // Your separate bucket for processed files
      .download(fileName);

    if (error) throw new Error(`Download failed: ${error.message}`);

    return data;
  } catch (error) {
    console.error('Download processed file error:', error);
    throw error;
  }
}
