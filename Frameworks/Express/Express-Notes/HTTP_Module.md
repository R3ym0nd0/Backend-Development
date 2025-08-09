# ✅ HTTP Module

    // Importing the http module
        const http = require('http');

    // Also import the fs module (for reading files)
        const fs = require('fs');

    // Create a Basic HTTP Server
        const server = http.createServer((req, res) => {
            // Handle request here
        });

    // Start the Server 
        server.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });

    // Request Object (req) – Inspect Incoming Data 
        console.log(req.method);  // HTTP method | GET, POST
        console.log(req.url);     // Path of the request | /, /login
        console.log(req.headers); // Incoming headers | User-Agent

    // Response Object (res) – Send Data Back
        res.setHeader('Content-Type', 'text/html');

    // Set Status Code:
        res.statusCode = 200;

    // Send Body & End:
        res.end('<h1>Hello Hacker!</h1>');

    //  All in one: 
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome, bro!');

    // Simple Routing Example
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home Page');
        } else if (req.url === '/admin') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Admin Panel');
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }


### ✅ Asynchronous File Reading Example (HTML serving)
    const path = require('path')
    
    const serverAsync = http.createServer((req, res) => {
      if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html')
    
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal Server Error')
            return
          }
    
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(data)
        })
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
      }
    })
    
    const PORT = 3000
    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })
