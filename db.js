const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Add this to .env
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

/**
 * Update the user's profile picture by ID or username.
 */
async function saveProfilePicByUserId(userId, imageFilename) {
  const { error } = await supabase
    .from('users')
    .update({ profile_pic: imageFilename })
    .eq('id', userId);

  if (error) {
    throw error;
  }
}

/**
 * Fetch the user's current profile picture by ID.
 */
async function getUserProfilePic(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('profile_pic')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data.profile_pic;
}

module.exports = { saveProfilePicByUserId, getUserProfilePic };