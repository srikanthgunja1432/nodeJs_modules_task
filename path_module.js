const path = require('path')

u="C:\\Users\\CVR\\Desktop\\5b6\\6-2-2025\\Events_Demo.js"



console.log("Extension Name is : "+path.extname(u)) 
console.log("Base Name is : " +path.basename(u))
console.log("Dir Name is : " +path.dirname(u))


let path1 = path.format({
    root: "C:\\Users\\CVR",
    dir: "Desktop\\5b6\\6-2-2025",
    base: "Events_Demo.js",
    });
console.log("Foramted :" + path1)


path2 = path.normalize("/users/admin/.."); 
console.log("Normailzed: "+ path2) 


let path3 = path.join("C:\\Users\\CVR\\Desktop\\5b6\\6-2-2025", "Events_Demo.js");
console.log("Joined Path: "+ path3)


let path4=path.parse(u)
console.log( path4)