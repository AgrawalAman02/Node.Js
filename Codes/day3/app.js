const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Corrected the protocol in the URL from "htps" to "https"
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully ");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds ");
}, 5000);

// Syncronous function of read file
// so this will block the thread and doesnt allow the js to move further 
// so it blocks . would it offloads to libuv ? Umm yes! 
// sometimes we need to do blocking

fs.readFileSync("./file.txt", "utf8");
console.log("Hii after Sync")


//  there is a function which is synchronous .look above this 

// Async Function
fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Data: ", data);
});

function multi(x, y) {
    return x * y; // Use x and y parameters
}
var c = multi(a, b);
console.log("Multiplication result is: ", c);
