// Backend Tutorial: Node.Js Modules with Examples | Web Development Tutorials #64


// built in modules !
// google searxdch -> node js built in modules
// with this module we can read a file or write a file too -> and we gonna see hiow we wwill do that 


// first step include the module 
// fs module
const fs= require("fs");


// if we want read a ceertain file
// synchronously reads the entire file  
let text = fs.readFileSync("p.txt", "utf-8");
// first agrument -> file name 
// second argument -> encoding 
console.log("The content of the file is :-  ");
console.log(text);



//  now we can even write text ! 
// or replace it 

text = text.replace("bitches" , " idiotsw");

console.log (" The text after its replaced :- " + text);


console.log(" creating a new file :- ");
// writing the text to a file 

// first argument-> file name //// second argument-> the text you want to wreite in that file 
fs.writeFileSync("new.txt" , text );
// new file successfully created !-




//  you can also make modules yoursleves 
// or make third party modules- jo logo ne aopke liye babnake rakhen hen 
//