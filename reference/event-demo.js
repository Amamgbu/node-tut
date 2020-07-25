const EventEmitter = require('events'); // Creates event module

//Create Event listener class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event',()=> console.log('Event fired!'));

//init event
myEmitter.emit('event');
myEmitter.emit('event');