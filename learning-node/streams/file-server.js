const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, resp) => {
    fs.readFile('./file', (err,data) => {
        if(err){
            console.error(err);
        }
        resp.end(data);
    });
});

server.listen(3000);
console.log('Tu server esta disponible en: http://localhost:3000');