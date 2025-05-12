const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const formidable = require('formidable');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./db');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://hptpfajsevuezirmdmrp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwdHBmYWpzZXZ1ZXppcm1kbXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNzY4MzQsImV4cCI6MjA2MjY1MjgzNH0.iyytlalrzZ3YGAZbf9i5TZnPaDlh-XiP0RWJKdLCKC4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
const PUBLIC_DIR = path.join(__dirname, 'Public');
const UPLOAD_DIR = path.join(PUBLIC_DIR, 'Images', 'Uploads');

// In-memory storage
let sessions = {};

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

// CORS setup
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'https://gei-mon.github.io',
  'https://gei-mon.github.io/geimon.io/',
  'https://geimon-app-833627ba44e0.herokuapp.com/',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// GET /users
app.get('/users', (req, res) => {
  const usersSafe = users.map(({ username, profilePic }) => ({ username, profilePic }));
  res.json(usersSafe);
});

// POST /users (Register)
app.post('/users', async (req, res) => {
  const { username, password } = req.body;

  const { data: existingUser, error: findError } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)
    .single();

  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const { error: insertError } = await supabase.from('users').insert([
    { username, password, profile_pic: '' }
  ]);

  if (insertError) {
    return res.status(500).json({ message: 'Database error', details: insertError.message });
  }

  res.status(200).json({ message: 'User added successfully' });
});

// POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve user from database
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create session
  const sessionId = generateSessionId();
  sessions[sessionId] = user.username;

  res.cookie('session', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    path: '/',
  });

  res.status(200).json({ message: 'Login successful' });
});

// GET /logout
app.get('/logout', (req, res) => {
  const sessionId = req.cookies.session;
  if (sessionId && sessions[sessionId]) {
    delete sessions[sessionId];

    res.cookie('session', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      expires: new Date(0),
    });

    return res.status(200).json({ message: 'Logout successful' });
  }

  res.status(400).json({ message: 'No session found' });
});

// GET /me
app.get('/me', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];

  if (username) {
    const { data: user } = await supabase
      .from('users')
      .select('username, profile_pic')
      .eq('username', username)
      .single();

    if (user) {
      const profilePic = user.profile_pic || '/Public/Images/Profile Pictures/default-image.png';
      return res.json({ loggedIn: true, username: user.username, profilePic });
    }
  }

  res.status(401).json({ loggedIn: false });
});

// POST /upload-profile-picture
app.post('/upload-profile-picture', (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: UPLOAD_DIR,
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, async (err, fields, files) => {
    if (err || !files.profilePic) {
      return res.status(400).json({ message: 'Upload failed' });
    }

    const uploadedPath = path.basename(files.profilePic[0].filepath);
    const sessionId = req.cookies.session;
    const username = sessions[sessionId];

    if (username) {
      // Update user's profile picture in the database
      const { error } = await supabase
        .from('users')
        .update({ profile_pic: `/Public/Images/Uploads/${uploadedPath}` })
        .eq('username', username);

      if (error) {
        return res.status(500).json({ message: 'Database error', details: error.message });
      }

      return res.status(200).json({
        message: 'Profile Picture Uploaded Successfully',
        filePath: `https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Uploads/${uploadedPath}`,
      });
    }

    res.status(401).json({ message: 'User not logged in' });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
