const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, resp) => {
    const src = fs.createReadStream('./file');
    src.pipe(res);
});

server.listen(3000);
console.log('Tu server esta disponible en: http://localhost:3000');