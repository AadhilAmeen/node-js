var http = require('http');

var server = http.createServer(function (req, res) {
    var urlString = req.url;

    if (urlString === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page!</h1>');
    } 
    else if (urlString === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>This is a simple Node.js server.</h1>');
    } 
    else if (urlString === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact us at contact@example.com.</h1>');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

server.listen(3000);