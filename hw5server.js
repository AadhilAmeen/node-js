// server.js

const http = require('http');

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page!</h1>');
    }

    // About Route
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>This is a simple Node.js server.</h1>');
    }

    // Contact Route
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact us at contact@example.com.</h1>');
    }

    // 404 Route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found.');
    }
});

// Server Listening
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});