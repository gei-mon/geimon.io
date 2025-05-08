const http = require('http');
const crypto = require('crypto');

// Declare variables
let usernames = [];
let passwords = [];
let sessions = {};

// Utility to generate session ID
function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

// Create server
const server = http.createServer((req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cookie');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS method (for CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle the /users GET method
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ usernames, passwords }));
  }

  // Handle the /users POST method (register a user)
  else if (req.url === '/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);

    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        if (typeof data.username === 'string' && typeof data.password === 'string') {
          // Check if username already exists
          if (usernames.includes(data.username)) {
            res.writeHead(409, { 'Content-Type': 'application/json' }); // Conflict
            return res.end(JSON.stringify({ message: 'User already exists' }));
          }

          usernames.push(data.username);
          passwords.push(data.password);

          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ message: 'User added successfully' }));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' }); // Bad Request
          return res.end(JSON.stringify({ message: 'Invalid input: Expected { username: string, password: string }' }));
        }
      } catch (err) {
        // Handle JSON parsing error
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
      const index = usernames.indexOf(data.username);

      if (index !== -1 && passwords[index] === data.password) {
        const sessionId = generateSessionId();
        sessions[sessionId] = data.username;

        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Set-Cookie': `session=${sessionId}; HttpOnly`
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

  // Handle the /me GET method (check login status)
else if (req.url === '/me' && req.method === 'GET') {
  const cookieHeader = req.headers.cookie || '';
  const sessionMatch = cookieHeader.match(/session=([a-f0-9]+)/);
  const sessionId = sessionMatch ? sessionMatch[1] : null;

  if (sessionId && sessions[sessionId]) {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Set-Cookie': `session=${sessionId}; HttpOnly` });
    return res.end(JSON.stringify({ loggedIn: true, username: sessions[sessionId] }));
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ loggedIn: false }));
  }
}

  // Handle unknown routes
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});