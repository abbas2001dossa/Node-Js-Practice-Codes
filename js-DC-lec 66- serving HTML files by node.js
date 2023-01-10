// Backend Tutorial/: Serving HTML Files using NodeJs | Web Development Tutorials #66

// backend is alla bout -> serving ffiles -> user ke hisab sefiles ko serve krna ! 
// in this we will serve an html file using node

// step 1 : make a serveragin \
//  user ke hisab se server k kesa seerve kena he 

const http = require('http');

const fs= require('fs');
// file ko read krenega throa const - but we will impiort fs model first

// blocking call/synchornoous call -> so no call back -> necressarey


const fileContent = fs.readFileSync('olo.html');
//  consists of tut61 code


//  make a server now
//  create server is a mnodule -=> google its specs !
//  arg 1 => request         || arg2 =>  response   
const server= http.createServer((req, res)=>{

        // u can serve now
        //response will write -
        // response code -> 200
        // content type -> text/HTML-> jo bhi browser he would know its an html file and would therefoore handle with that respect
        res.writeHead(200 , {'content-type' : 'text/HTML'} );
        res.end(fileContent)
        //server is now made 
})

        //sever ko end krna zaroori ffor reload -> .exit on mnode js vs code termnial 

        // server would nowlisten to this port 
        //80 -> port -> faida? -> port ko expilictly mention nhi krna prega 
        // if we write port: 8000 -> it wont work
        // 127.0.0.1 -> local host 
        // call back -> 
server.listen(80, '127.0.0.1' , ()=> {
        console.log("listeniign on port 80");
    }
)








    
