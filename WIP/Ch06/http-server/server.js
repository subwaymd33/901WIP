const http = require('http');
const server = http.createServer();

server.on('request', (request,response) =>{
    response.end('Hello Universe!');
});

server.listen(3131, (err) =>{
    if (err) {
        return console.log('something bad happened',err);
    }
    console.log('server is listening on 3131');
})