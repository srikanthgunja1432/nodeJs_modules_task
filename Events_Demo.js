
const events= require('events')
const fs=require('fs')
const emitter=new events.EventEmitter()

/*
   
    on -> Listener  -> on(<event-name>,<callback , args-list>)
    emit -> Emitter -> emit(<event-name>,[args-list])
*/

fs.writeFile('new_file.txt',"Hello World",(err)=>{
    if(err){
        console.log(err)
    }else{
        emitter.emit('file')
    }
})
emitter.on('file',()=>console.log('File Created Sucessfully'))



let count=0
emitter.on('counter',(count)=>console.log("Count: "+count))
let interval=setInterval(() => {
    count++;
    if(count==5){
        clearInterval(interval); // Stop the interval once count reaches 5
        console.log('Count reached 5, stopping...');
    }
    emitter.emit('counter', count); 
}, 2000);