
// const {e=new EventEmitter()} = require('events')
const events= require('events')

const emitter=new events.EventEmitter()
// console.log(emitter)

/*
   
    on -> Listener  -> on(<event-name>,<callback , args-list>)
    emit -> Emitter -> emit(<event-name>,[args-list])
*/


emitter.on('dd',()=>console.log('It'))
emitter.on('dd',()=>console.log('It'))
emitter.emit('dd')