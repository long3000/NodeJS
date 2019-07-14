const http = require('http');

const hostname = 'localhost';
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Page\n');
}).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});