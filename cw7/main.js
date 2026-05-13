const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

// Create event emitter
const pageEmitter = new EventEmitter();

// Event listener
pageEmitter.on('pageViewed', (pageName) => {
    console.log(`${pageName} page was viewed`);
});

// Create server
const server = http.createServer((req, res) => {

    let fileName = '';

    // Route handling
    if (req.url === '/' || req.url === '/home') {
        fileName = 'home.html';
    } 
    else if (req.url === '/services') {
        fileName = 'services.html';
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
        return;
    }

    // File path
    const filePath = path.join(__dirname, fileName);

    // Read and display HTML file
    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Error loading page</h1>');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);

        // Emit custom event
        pageEmitter.emit('pageViewed', fileName);
    });
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});