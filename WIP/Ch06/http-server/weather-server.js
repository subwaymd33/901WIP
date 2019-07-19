const http = require('http');
const server = http.createServer();

server.listen(3131, (err) =>{
    if (err) {
        return console.log('something bad happened',err);
    }
    console.log('server is listening on 3131');
})

function populateDaysofWeek(){
    return ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
}


server.on('request', (request,response) =>{
    weekArray = populateDaysofWeek();
    response.end(weekArray);
});