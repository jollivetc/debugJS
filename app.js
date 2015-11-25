var express = require('express');
var path = require('path');
var app = express();
 
app.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/', function(request, response){
	response.send('{"name" : "Codeurs en Seine"}');
})