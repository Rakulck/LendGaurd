import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Uploads a file to Supabase Storage
 * @param {File} file - The file to upload
 * @param {string} folderName - The folder to store the file in
 * @param {string} userId - The user ID for organizing files
 * @returns {Promise<{data: any, error: any}>} - Supabase response
 */
export const uploadFile = async (file, folderName, userId) => {
  const filePath = `${userId}/${folderName}/${file.name}`;
  
  return await supabase
    .storage
    .from('documents')
    .upload(filePath, file);
};

/**
 * Removes a file from Supabase Storage
 * @param {string} filePath - The path of the file to remove
 * @returns {Promise<{data: any, error: any}>} - Supabase response
 */
export const removeFile = async (filePath) => {
  return await supabase
    .storage
    .from('documents')
    .remove([filePath]);
};
