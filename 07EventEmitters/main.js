var events = require('events');
var util = require('util');

/*
* Dinh nghia Pulser ke thua tu lop EventEmitter
*/
function Pulser(){
	events.EventEmitter.call(this);
}

util.inherits(Pulser, events.EventEmitter); // chep toan bo du lieu da co trong EventEmitter va lop Pulser.
// Noi dung ra la Pulser la ke thua cua EventEmitter clasa

/*
* Dinh nghia start function , cu sau 1s thi tu dong phat di emit event
*/
Pulser.prototype.start = function(){
	var self = this;
	this.id = setInterval(function(){
		self.emit('pulse'); // emit la thuc hien moi nguoi nghe theo thu tu cac doi so cung cap. Tra ve true neu su kien do da nghe roi
	}, 1000);
}

var pulser = new Pulser(); // Dinh nghi Pulser
pulser.on('pulse', function(){
	console.log('Pulser received');
});

pulser.start();