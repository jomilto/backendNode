const http = require('http');
const server = http.createServer();

server.on('request', (req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type','text/plain');

    resp.end('Hello world\n');
});

server.listen(3000);
console.log('Tu server esta disponible en: http://localhost:3000');