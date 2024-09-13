const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("Timer Expired "), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () =>{
    setTimeout(() => console.log("2md timer"),0);
    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd SetImmediate "));

    console.log("File Reading CB");
});

process.nextTick(() => console.log("NextTick"));
console.log("Last Line of the file");

// ! Output

/*
Last Line of the file
NextTick
Promise
Timer Expired
setImmediate
File Reading CB
2nd nextTick          // after waiting in poll phase first process next tick executed
2nd SetImmediate     // first setimmediate performs as the event is waiting at the poll phase so after poll phase immediate comes first
2md timer
*/