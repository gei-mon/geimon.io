const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const formidable = require('formidable');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const USERS_FILE = 'users.json';
const PUBLIC_DIR = path.join(__dirname, 'Public');
const UPLOAD_DIR = path.join(PUBLIC_DIR, 'Images', 'Uploads');

// In-memory storage
let users = [];
let sessions = {};

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Load users from file
if (fs.existsSync(USERS_FILE)) {
  try {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  } catch (err) {
    console.error('Error reading users file:', err);
    users = [];
  }
}

function saveUsersToFile() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
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
app.post('/users', (req, res) => {
  const { username, password } = req.body;

  if (typeof username === 'string' && typeof password === 'string') {
    if (users.find(u => u.username === username)) {
      return res.status(409).json({ message: 'User already exists' });
    }

    users.push({ username, password, profilePic: '' });
    saveUsersToFile();
    return res.status(200).json({ message: 'User added successfully' });
  }

  res.status(400).json({ message: 'Invalid input' });
});

// POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && user.password === password) {
    const sessionId = generateSessionId();
    sessions[sessionId] = user.username;

    res.cookie('session', sessionId, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      path: '/',
    });

    return res.status(200).json({ message: 'Login successful' });
  }

  res.status(401).json({ message: 'Invalid credentials' });
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
app.get('/me', (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];

  if (username) {
    const user = users.find(u => u.username === username);
    const profilePic = user?.profilePic || '/Public/Images/Uploads/default.jpg';

    return res.json({ loggedIn: true, username, profilePic });
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

  form.parse(req, (err, fields, files) => {
    if (err || !files.profilePic) {
      return res.status(400).json({ message: 'Upload failed' });
    }

    const uploadedPath = path.basename(files.profilePic[0].filepath);
    const sessionId = req.cookies.session;
    const username = sessions[sessionId];

    if (username) {
      const user = users.find(u => u.username === username);
      if (user) {
        user.profilePic = `/Public/Images/Uploads/${uploadedPath}`;
        saveUsersToFile();
      }

      return res.status(200).json({
        message: 'Profile picture uploaded successfully',
        filePath: `/Public/Images/Uploads/${uploadedPath}`,
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
