// Import the built-in Node.js 'http' module.
const http = require('http');

// Create an HTTP server.
// The function passed to createServer is a request listener, which is executed for each incoming request.
http.createServer(function (req, res) {
 // Send the HTTP header.
 // HTTP Status: 200 : OK
 // Content Type: text/html
 res.writeHead(200, {'Content-Type': 'text/html'});
 // Write the response body "Hello World!".
 res.write('Hello World!');
 // Signal that the server should consider this response complete.
 res.end();
}).listen(8080); // The server object listens on port 8080.
