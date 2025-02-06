const fs = require('fs')

//fs.mkdir('cseb0602', (err)=>{if(err) console.log(err)} )

const fs_def="The fs (File System) module in Node. js is a powerful tool for working with the file system, allowing you to interact with files and directories on your server"
fs.writeFile('nsf.txt',fs_def,(err)=>{
    if(err) console.log(err)
})

fs.readFile('nsf.txt','utf-8',(err,data)=>{
    if(err)
        {console.log(err)}
    else{
        fs.writeFile('new-nfs.txt',data,(err)=>{
            console.log(err)
        })
    }
   
})
fs.appendFile('nsf.txt',"\nnew data",(err)=>{
console.log(err)
})