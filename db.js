require('dotenv').config();
const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function saveProfilePicByUserId(userId, imageFilename) {
  const { error } = await supabase
    .from('users')
    .update({ profile_pic: imageFilename })
    .eq('id', userId);

  if (error) throw error;
}

async function getUserProfilePic(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('profile_pic')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data.profile_pic;
}

module.exports = {
  pool,
  saveProfilePicByUserId,
  getUserProfilePic,
  supabase, // optional: if you want to share the client too
};
