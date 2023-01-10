// console.log("Hello WOrld !");
// MAKES A BACKEND APPLICATOIN ! 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
res.setHeader('Content-Type', 'text/HTML');

//  entering html code inside it 
// use the apostrophe on left of 1 "->  `  <-"
res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> MANGIO MANIAC</title>
</head>
<style>
    .cont{
        border: 2px solid blue ;
        padding :23px;
        font-size: medium;
        border-radius: 9px;
    }
</style>
<body>

    <div class="cont">
        <h1> THESEARE MANGOES </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et incidunt quod nulla fuga perferendis omnis, molestiae voluptatibus numquam delectus dolores quo totam perspiciatis minima sunt soluta ipsa sed maiores repellat.</p>
        <button id="btn"> CLICK ME </button>
    </div>
    
</body>
</html>`);

//    whaateveryou type here would be shown on the page after you ahve wrtiiemn
// EVEN HTML CAN BE WRITTEN AS IT on 


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//  THIS CODE makes a server in node js - with the help of that 
// SERVER IS MADE IN TERMINAOL !


// ctrl + c -> scanc3el server 
// NODE.js   REPL ->read evaluate [print loop ]
// opens when you write node in you command prompt ! 

//  in terminal -> 
// _ -> means the previous variabkle ! -> NO0 MATTER STRNIG OR WHATEVER IT IS ! 
