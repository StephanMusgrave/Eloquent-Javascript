var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
  console.log("SERVER ON");

  var path = url.parse(request.url).pathname;

  switch(path){
    case '/':
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write("Hello");
        break;
    default:
      response.writeHead(404);
      response.write('404: nothing to see here! Get out.');
  }
  response.end();
});

server.listen(300);
console.log("Server up and running");



















