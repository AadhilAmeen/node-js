var http = require('http');

var server = http.createServer(function (req, res) {
  var urlString = req.url; // geting url from request
  res.write(urlString);
  res.end();
});
server.listen(8080); 