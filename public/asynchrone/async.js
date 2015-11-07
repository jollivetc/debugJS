$.getJSON('/api/', function(data){
	$("#data").text(data.name);
})