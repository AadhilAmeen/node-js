// server.js

const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Print request URL and method
    console.log(`URL: ${req.url} | Method: ${req.method}`);

    // Home page
    if (req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to ABC College!');

    }

    // About page
    else if (req.url === '/about') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About ABC College</h1>');

    }

    // Other pages
    else {

        res.statusCode = 404;
        res.statusMessage = 'Not Found';

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Run server on port 8080
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});