const fs = require("fs");
const a = 100;

setImmediate(()=> console.log("setImmediate "));  // offloaded to libuv

Promise.resolve("Promise").then(console.log);  // ffloded to libuv


fs.readFile("./file.txt", "utf8", ()=>{     // offloaded to libuv
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired "), 0);   // offloaded to libuv

process.nextTick(() => console.log("process.nextTick"));   // offloaded to libuv

function printA(){      // in the call stack
    console.log("a=", a);
}

printA();     // a will be printed first 
console.log("Last line of the file.");   // then last line is printed 


// ! OUTPUT

/*
a= 100
Last line of the file.
process.nextTick
Promise
Timer Expired
setImmediate
File Reading CB
*/