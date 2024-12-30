// const interval = setInterval (()=>{
//     console.log("Running");
// },3000);

// setTimeout(()=>{
//     clearInterval(interval);
// },1000);


// const path = require("fs");
// console.log(path);

// console.log(__filename)


// const { error } = require("console");

// const path = require("path")
// const fs = require("fs");

// console.log(path.join(__dirname, "api","script.js"))

// const path = require("path")
// const fs = require("fs");
// fs.mkdir(path.join(__dirname,"/api1/api2/ index.html"), {} , (err)=>{  ////file creat
// if (err)throw err;
// });


// const path = require("path")
// const fs = require("fs");
// fs.rmdir(path.join(__dirname,"/api"), {recursive:true} , (err)=>{  ////file delete
//     if (err)throw err;
//     });
    


// const path = require("path")
// const fs = require("fs");
// fs.writeFile(path.join(__dirname,"/api" ,"api.txt"),"User name:Debug"  , (err)=>{   
//     if (err)throw err;
//     });

// const path = require("path")
// const fs = require("fs");
// const user = "Swalih"
// fs.writeFile(path.join(__dirname,"/api" ,"api.txt"),`user name:${user}`  , (err)=>{   
//     if (err)throw err;
//     });
        

// const path = require("path")
// const fs = require("fs");
// const user = "Swalih"
// fs.appendFile(path.join(__dirname,"/api" ,"api.txt"),`\n user name:${user}`  , (err)=>{   
//     if (err)throw err;
//     });


// const path = require("path")
// const fs = require("fs");
// const user = "Swalih"
// fs.readFile(path.join(__dirname,"/api" ,"api.txt"), {}  , (err, data)=>{   
//    console.log(data)
//     });
// fs.readFile(path.join(__dirname,"/api" ,"api.txt"), "utf-8"  , (err, data)=>{   
// console.log(data)
//     });


        
// const EventEmitter = require("events");
// const emiter = new EventEmitter();

// emiter.on("message",(data)=>{
//     console.log(data.text)
// })
// emiter.emit("message",{text: "user logged"})


// const http = require("http")

// http.createServer((req,respons)=>{
//    respons.write("Thise is Node.js");
//    res.end();
// }).listen(3001,()=>console.log("server is running"))

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
   res.writeHead((200,{'content - Type':"text/html"}))
    console.log("Test");
    res.end("<h1>Hello<h1/>");
});
const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>console.log(`server running on ${PORT}`));