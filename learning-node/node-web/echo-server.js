const http = require('http');
const server = http.createServer();

server.on('request', (req, resp) => {
    if( req.method === 'POST' && req.url === '/echo'){
        
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            resp.writeHead(200, {'Content-Type': 'text/plain'})
            body = Buffer.concat(body).toString();
            resp.end(body);
        });
    }else{
        resp.statusCode = 404;
        resp.end();
    }
});

server.listen(3001);
console.log('Tu server esta disponible en: http://localhost:3001');