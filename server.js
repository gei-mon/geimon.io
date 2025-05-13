const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const formidable = require('formidable');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./db');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
require('dotenv').config();

// In-memory storage
let sessions = {};

const SUPABASE_URL = 'https://hptpfajsevuezirmdmrp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwdHBmYWpzZXZ1ZXppcm1kbXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNzY4MzQsImV4cCI6MjA2MjY1MjgzNH0.iyytlalrzZ3YGAZbf9i5TZnPaDlh-XiP0RWJKdLCKC4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
const PUBLIC_DIR = path.join(__dirname, 'Public');
app.use('/Public', express.static(path.join(__dirname, 'Public')));
const PROFILE_DIR = path.join(PUBLIC_DIR, 'Images', 'Profile Pictures');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profile-images', (req, res) => {
  const dirPath = path.join(__dirname, 'Public', 'Images', 'Profile Pictures');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error reading profile pictures directory:', err);
      return res.status(500).json({ error: 'Could not read image directory' });
    }

    // Only send .png/.jpg/etc. files
    const imageFiles = files.filter(file =>
      /\.(png|jpg|jpeg|gif)$/i.test(file)
    );

    res.json(imageFiles);
  });
});

app.post('/select-profile-image', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const selectedImage = req.body.selectedImage;

  if (!username) {
    return res.status(401).json({ message: 'Not logged in' });
  }

  try {
    const { error } = await supabase
      .from('users')
      .update({ profile_pic: selectedImage })
      .eq('username', username);

    if (error) {
      throw error;
    }

    res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update profile picture', error: err.message });
  }
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '/profile.html'));
});

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
app.get('/users', async (req, res) => {
  const { data: users, error } = await supabase
    .from('users')
    .select('username, profile_pic');

  if (error) {
    return res.status(500).json({ message: 'Error fetching users' });
  }

  res.json(users);
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
  console.log('Session ID:', sessionId);  // Log the session ID

  if (!sessionId || !sessions[sessionId]) {
    return res.status(401).json({ loggedIn: false });
  }
  const username = sessions[sessionId];

  if (username) {
    const { data: user } = await supabase
      .from('users')
      .select('username, profile_pic')
      .eq('username', username)
      .single();

    console.log('Username from session:', username);
    console.log('User from Supabase:', user);

    if (user) {
      const profilePic = user.profile_pic || '/Public/Images/Profile Pictures/Sharpshooter-Square.png';
      return res.json({ loggedIn: true, username: user.username, profilePic });
    }

  res.status(401).json({ loggedIn: false });
  }
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
