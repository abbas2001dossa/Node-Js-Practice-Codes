// Backend Tutorial: Blocking vs Non-Blocking execution | Web Development Tutorials #65


//  any code which executes line by line -> synchonous code and blocking code called

// any code which is executed not line by line - call back will fire -> asynchoronous or non blaocking code 

//sync -> ye line pehla execute krna -> us code ke bad he aga barhna !


const fs= require("fs");

// the function is the error function -> its written in the modules website on google -> readfile module search !
// the function at the last argument is called -> called back 
let text=fs.readFile("p.txt" , "utf-8" , (err,data)=>{
    // if the file name is wrong or any other error comes up -> themn the error msg is prmpted and retruned 
    console.log(err,data);
    // this msg is printed -> if errror ! 

});

console.log("ewreere");
// this prints first ? why ->
// the reaadile takes some time/ the call back function  meanwhile the the ewwweeere is executed
// both are executed line by line -> tho readfile one takes some time 



//NODE JS -> works like this oona  non blocking model ! asyynch ? \


