const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"));
 
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8",()=>{
    console.log("File reading CB");
});

// here until the callback queue of hte process is not empty other event is not processed
// so after nexttick , inner tick is printed 
process.nextTick(()=>{
    process.nextTick(()=>console.log("inner tick"));
    console.log("nextTick");
});

console.log("Last Line of the file");


// ! OUTPUT

/*
Last Line of the file
nextTick
inner tick
Promise
Timer expired
setImmediate
File reading CB
*/