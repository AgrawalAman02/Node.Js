const crypto = require("node:crypto");

console.log("Hello world");

var a = 108374;
var b= 949842;

// this one is a sync function . it dont need callback function as it dont ofloads
crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("Key 1 is loaded")
// this will generate first as it is blocking th code and then multiply then key 2 is generted 
// if we used 50000000 then it will took even more time , 
// SO NEVER EVER USE THE SYNCHRONOUS FUNCTION : IT BLOCKS THE MAIN THREAD 

// password Base Key Derivability:Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2) implementation
crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=>{
    console.log("Key 2  is generated");
});  // async function : generated after the multiply result



function multi(x, y) {
    return x * y; // Use x and y parameters
}
var c = multi(a, b);
console.log("Multiplication result is: ", c);