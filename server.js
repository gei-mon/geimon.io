const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const USERS_FILE = 'users.json';
const formidable = require('formidable');
const path = require('path');
const cors = require('cors');

// Declare variables
let users = [];
let sessions = {};

const PUBLIC_DIR = path.join(__dirname, 'Public');
const UPLOAD_DIR = path.join(PUBLIC_DIR, 'Images', 'Uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Load users
if (fs.existsSync(USERS_FILE)) {
  try {
    const rawData = fs.readFileSync(USERS_FILE);
    users = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading users file:', err);
    users = [];
  }
}

// Utility to generate session ID
function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

// Create server
const server = http.createServer((req, res) => {
  // Add CORS headers
  //res.setHeader('Access-Control-Allow-Origin', '*');
  const allowedOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500', 'https://gei-mon.github.io/geimon.io/', 'https://geimon-app-833627ba44e0.herokuapp.com/'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cookie');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS method (for CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url.startsWith('/Public/')) {
  const filePath = path.join(__dirname, req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Change Content-Type as needed
      res.end(data);
    }
  });
  return;
}

if (req.url === '/' && req.method === 'GET') {
  const indexPath = path.join(__dirname, 'index.html');
  fs.readFile(indexPath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error loading main page');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
  return;
}

    if (req.url === '/upload-profile-picture' && req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: UPLOAD_DIR,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err || !files.profilePic) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Upload failed' }));
      }

      const uploadedPath = path.basename(files.profilePic[0].filepath);
      const sessionId = req.headers.cookie && req.headers.cookie.match(/session=([a-f0-9]+)/);
      const username = sessions[sessionId ? sessionId[1] : null];

      if (username) {
        // Find the user and update their profile picture path
        const user = users.find(u => u.username === username);
        if (user) {
          user.profilePic = `/Public/Images/Uploads/${uploadedPath}`;
          saveUsersToFile();  // Save the updated users data to file
        }

        // Return the new image path
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          message: 'Profile picture uploaded successfully',
          filePath: `/Public/Images/Uploads/${uploadedPath}`,
        }));
      }

      res.writeHead(401, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'User not logged in' }));
    });

    return;
  }

  // Handle the /users GET method
if (req.url === '/users' && req.method === 'GET') {
  const usersSafe = users.map(({ username, profilePic }) => ({ username, profilePic }));
  res.writeHead(200, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify(usersSafe));
}

  // Handle the /users POST method (register a user)
  else if (req.url === '/users' && req.method === 'POST') {
  let body = '';
  req.on('data', chunk => body += chunk);

  req.on('end', () => {
    try {
      const data = JSON.parse(body);

      if (typeof data.username === 'string' && typeof data.password === 'string') {
        if (users.find(u => u.username === data.username)) {
          res.writeHead(409, { 'Content-Type': 'application/json' }); // Conflict
          return res.end(JSON.stringify({ message: 'User already exists' }));
        }

        users.push({
          username: data.username,
          password: data.password,
          profilePic: '' // Default empty until user uploads one
        });

        saveUsersToFile();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'User added successfully' }));
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Invalid input' }));
      }
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Invalid JSON' }));
    }
  });

    req.on('error', (err) => {
      console.error('Request error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Internal Server Error' }));
    });

    return; // Ensure no further code runs after responding
  }

  // Handle the /login POST method (login a user)
  else if (req.url === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);

    req.on('end', () => {
      const data = JSON.parse(body);
      const user = users.find(u => u.username === data.username);

      if (user && user.password === data.password) {
        const sessionId = generateSessionId();
        sessions[sessionId] = data.username;

        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Set-Cookie': `session=${sessionId}; HttpOnly; Path=/; SameSite=None; Secure`
        });
        return res.end(JSON.stringify({ message: 'Login successful' }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Invalid credentials' }));
      }
    });

    req.on('error', (err) => {
      console.error('Request error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Internal Server Error' }));
    });
  }

  else if (req.url === '/logout' && req.method === 'GET') {
  const cookieHeader = req.headers.cookie || '';
  const sessionMatch = cookieHeader.match(/session=([a-f0-9]+)/);
  const sessionId = sessionMatch ? sessionMatch[1] : null;

  if (sessionId && sessions[sessionId]) {
    // Delete the session to log the user out
    delete sessions[sessionId];

    // Set a cookie to expire immediately, effectively clearing it
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Set-Cookie': 'session=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Path=/; SameSite=None; Secure'
    });
    return res.end(JSON.stringify({ message: 'Logout successful' }));
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'No session found' }));
  }
}

  // Handle the /me GET method (check login status)
else if (req.url === '/me' && req.method === 'GET') {
  const cookieHeader = req.headers.cookie || '';
  const sessionMatch = cookieHeader.match(/session=([a-f0-9]+)/);
  const sessionId = sessionMatch ? sessionMatch[1] : null;

  const username = sessions[sessionId];

  if (username) {
    const user = users.find(u => u.username === username);
    const profilePic = user?.profilePic || '/Public/Images/Uploads/default.jpg';

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      loggedIn: true,
      username,
      profilePic
    }));
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ loggedIn: false }));
  }
}

  res.writeHead(404, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify({ message: 'Not Found' }));
});

function saveUsersToFile() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});