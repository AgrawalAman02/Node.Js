const fs = require("fs");
const a = 100;

setImmediate(()=> console.log("setImmediate "));  // offloaded to libuv

fs.readFile("./file.txt", "utf8", ()=>{     // offloaded to libuv
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired "), 0);   // offloaded to libuv

function printA(){      // in the call stack
    console.log("a+", a);
}

printA();     // a will be printed first 
console.log("Last line of the file.");   // then last line is printed 

/*
now after last line event loop check for the prcess and promises , nothing found 
now it execute the set timeout 
now again go to the inner loop but nothing found 
now check for the poll , file reading is not done and it is not available in the callback queue , so skip
no inner loopp
now set immediate runs
.
.
now read file available in its callback queue then it will be executed 
now end
*/


// ! output 

/*
a+ 100
Last line of the file.
Timer Expired
setImmediate
File Reading CB
*/