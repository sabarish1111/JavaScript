var events = require('events');
var eventEmitter = new events.EventEmitter(); 

var myEventHandler = function() {
    console.log('I love ice cream');
};

eventEmitter.on('tea', myEventHandler); 
eventEmitter.emit('tea');
