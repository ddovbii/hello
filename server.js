var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    switch (request.url) {
        case '/': {
            fs.readFile('index.html', 'utf-8', function (error, data) {
                if (error) {
                    console.log(error);
                    return;
                }
                else
                {
                    response.end(data);
                }
            });
            break;
        }
        case '/givemeresults': {
            response.end('some results');
        }
    }
});
server.listen(3000);