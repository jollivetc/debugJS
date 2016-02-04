var express = require('express');
var path = require('path');
var app = express();

app.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/', function(request, response){
	response.send('{"name" : "Devfest Paris"}');
});

app.get('/latence', function(request, response){
  setTimeout(function(){response.send('{"id":"an Object ID"}')}, 1000)
});

app.get('/error', function(request, response){
  setTimeout(function(){
      response.send(400, {"message":"error message"})
  }, 1000)

})
