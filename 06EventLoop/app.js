// import events moudle 
var events = require('events');

// createEvent object
var eventEmitter = new events.EventEmitter();


// create an event handler as follows
var connectHandler = function connected(){
	console.log('connected successful');
	
	// fire the data received event
	eventEmitter.emit('data_received');
}

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received successfully');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended');

var fs = require("fs");

// read file 
fs.readFile('input.txt', function(err, data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log('Program Ended');