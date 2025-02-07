import { supabase } from '../lib/supabase';

// Upload file with metadata
export async function uploadFile(file, userId) {
  try {
    // Generate unique file path with user_id/files structure
    const filePath = `${userId}/files/${Date.now()}-${file.name}`;
    
    // Determine content type based on file extension
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(fileExtension);
    const isDocument = ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx'].includes(fileExtension);
    
    // Set appropriate content type
    let contentType = 'application/octet-stream'; // default
    if (isImage) {
      contentType = `image/${fileExtension === 'jpg' ? 'jpeg' : fileExtension}`;
    } else if (isDocument) {
      contentType = {
        pdf: 'application/pdf',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        txt: 'text/plain',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }[fileExtension];
    }

    // Upload file to bucket
    const { data, error } = await supabase.storage
      .from('user-deals')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: contentType
      });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('user-deals')
      .getPublicUrl(filePath);

    // Return the expected structure
    return {
      path: filePath,
      url: urlData.publicUrl,
      size: file.size,
      type: contentType,
      isImage,
      isDocument
    };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

// Delete file
export async function deleteFile(filePath) {
  try {
    const { error } = await supabase.storage
      .from('user-deals')
      .remove([filePath]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

// Get user's files
export async function getUserFiles(userId) {
  try {
    const { data, error } = await supabase.storage
      .from('user-deals')
      .list(`${userId}/files/`);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Get files error:', error);
    throw error;
  }
}

// Get file URL
export async function getFileUrl(filePath) {
  try {
    const { data } = supabase.storage
      .from('user-deals')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Get URL error:', error);
    throw error;
  }
}