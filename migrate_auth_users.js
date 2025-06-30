// migrate_auth_users.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const svc = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false }
});

async function migrate() {
  const { data: profiles, error: fetchErr } = await svc
    .from('users')
    .select('id,email,password');
  if (fetchErr) {
    console.error('Error fetching profiles:', fetchErr.message);
    process.exit(1);
  }
  if (!profiles || profiles.length === 0) {
    console.log('No profiles to migrate.');
    return;
  }

  for (const profile of profiles) {
    const { id: profileId, email, password } = profile;
    let authUserId = null;

    // 1) Try to find existing Auth user by email
    const { data: listRes, error: listErr } = await svc.auth.admin.listUsers({
      filter: `email=eq.${email}`,
      page:   1,
      perPage: 1
    });
    if (listErr) {
      console.error(`❌ [${profileId}] Error listing auth users:`, listErr.message);
      continue;
    }
    if (listRes && listRes.users && listRes.users.length > 0) {
      // existing user found
      authUserId = listRes.users[0].id;
      console.log(`ℹ️  [${profileId}] Auth user already exists: ${authUserId}`);
    } else {
      // 2) Create a new Auth user
      const { data: authData, error: authErr } = await svc.auth.admin.createUser({
        email,
        password,
        email_confirm: true
      });
      if (authErr || !authData.user) {
        console.error(
          `❌ [${profileId}] Failed to create auth user:`,
          authErr?.message || 'no user returned'
        );
        continue;
      }
      authUserId = authData.user.id;
      console.log(`✅ [${profileId}] Created Auth user: ${authUserId}`);
    }

    // 3) Update your profile row’s auth_id
    const { error: updateErr } = await svc
      .from('users')
      .update({ auth_id: authUserId })
      .eq('id', profileId);
    if (updateErr) {
      console.error(
        `❌ [${profileId}] Failed to update profile with auth_id:`,
        updateErr.message
      );
    } else {
      console.log(`✅ [${profileId}] Profile.auth_id set to ${authUserId}`);
    }
  }
}

migrate()
  .then(() => {
    console.log('Migration complete');
    process.exit(0);
  })
  .catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
  });
