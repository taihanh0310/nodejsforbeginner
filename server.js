// var http = require("http");

// function onRequest(request, response){
// 	console.log("Request received!");
// 	response.writeHead(200,{"Conten-Type": "text/plain"});
// 	setTimeOutToRefeshServer(response, 5000);
// 	//response.write("Hello World");
// 	response.end();
// }

// function setTimeOutToRefeshServer(response, time){
// 	setTimeout(function(){
// 		response.write("Dog is done");
// 		response.end();
// 	},time);
// }

// http.createServer(onRequest).listen(11111);
// console.log("Server has started!");

var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Dog is running.");

	setTimeout(function(){
		response.write("Dog is Done.");
		response.end();
	},5000);
}).listen(11111);

console.log("Server has started!");