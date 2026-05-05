const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("pageLoaded", (page) => {
  console.log(`${page} page loaded successfully`);
});

const server = http.createServer((req, res) => {
  let fileName = "";

  if (req.url === "/about") {
    fileName = "about.html";
  } else if (req.url === "/contact") {
    fileName = "contact.html";
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
    return;
  }

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Server Error</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);

      eventEmitter.emit("pageLoaded", fileName);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});