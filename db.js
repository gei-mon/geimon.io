const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Add this to .env
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;