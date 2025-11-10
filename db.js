require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function pingDatabase() {
  try {
    // Lightweight query that keeps connection alive
    await pool.query('SELECT NOW()');
    console.log(`[${new Date().toISOString()}] Database ping successful.`);
  } catch (err) {
    console.error('Database ping failed:', err.message);
  }
}

// Ping immediately on startup
pingDatabase();

// Then ping once every 24 hours
const ONE_DAY = 24 * 60 * 60 * 1000;
setInterval(pingDatabase, ONE_DAY);

module.exports = { pool };