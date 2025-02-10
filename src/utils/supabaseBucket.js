// import { supabase } from '../lib/supabase';

// // Upload file with metadata
// export async function uploadFile(file, userId) {
//   try {
//     console.log(`Starting file upload for user ${userId}, file: ${file.name}`);
    
//     // Generate unique file path with user_id/files structure
//     const filePath = `${userId}/files/${Date.now()}-${file.name}`;
//     console.log(`Generated file path: ${filePath}`);
    
//     // Determine content type based on file extension
//     const fileExtension = file.name.split('.').pop().toLowerCase();
//     const isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(fileExtension);
//     const isDocument = ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx'].includes(fileExtension);
//     console.log(`File type detected: ${fileExtension}, isImage: ${isImage}, isDocument: ${isDocument}`);
    
//     // Set appropriate content type
//     let contentType = 'application/octet-stream'; // default
//     if (isImage) {
//       contentType = `image/${fileExtension === 'jpg' ? 'jpeg' : fileExtension}`;
//     } else if (isDocument) {
//       contentType = {
//         pdf: 'application/pdf',
//         doc: 'application/msword',
//         docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//         txt: 'text/plain',
//         xls: 'application/vnd.ms-excel',
//         xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//       }[fileExtension];
//     }
//     console.log(`Content type set to: ${contentType}`);

//     // Upload file to bucket
//     console.log('Starting file upload to Supabase storage...');

//     const { data, error } = await supabase.storage
//       .from('user-deals')
//       .upload(filePath, file, {
//         cacheControl: '3600',
//         upsert: false,
//         contentType: contentType
//       });

//     if (error) throw error;
//     console.log('File upload successful');

//     // Get public URL
//     console.log('Generating public URL...');
//     const { data: urlData } = supabase.storage
//       .from('user-deals')
//       .getPublicUrl(filePath);

//     // Return the expected structure
//     console.log('File upload process completed successfully');
//     return {
//       path: filePath,
//       url: urlData.publicUrl,
//       size: file.size,
//       type: contentType,
//       isImage,
//       isDocument
//     };
//   } catch (error) {
//     console.error('Upload error:', error);
//     throw error;
//   }
// }

// // Delete file
// export async function deleteFile(filePath) {
//   try {
//     console.log(`Starting file deletion for path: ${filePath}`);
//     const { error } = await supabase.storage
//       .from('user-deals')
//       .remove([filePath]);

//     if (error) throw error;
//     console.log('File deletion successful');
//     return true;
//   } catch (error) {
//     console.error('Delete error:', error);
//     throw error;
//   }
// }

// // Get user's files
// export async function getUserFiles(userId) {
//   try {
//     console.log(`Fetching files for user ${userId}`);
//     const { data, error } = await supabase.storage
//       .from('user-deals')
//       .list(`${userId}/files/`);

//     if (error) throw error;
//     console.log(`Successfully retrieved ${data.length} files for user ${userId}`);
//     return data;
//   } catch (error) {
//     console.error('Get files error:', error);
//     throw error;
//   }
// }

// // Get file URL
// export async function getFileUrl(filePath) {
//   try {
//     console.log(`Generating URL for file: ${filePath}`);
//     const { data } = supabase.storage
//       .from('user-deals')
//       .getPublicUrl(filePath);

//     console.log(`Successfully generated URL for file: ${filePath}`);
//     return data.publicUrl;
//   } catch (error) {
//     console.error('Get URL error:', error);
//     throw error;
//   }
// }

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
