/*
const calculator = require("./src.js");  // one module into another   
// here we are getting calculator function returned into calculator;

console.log("the value of importing calculator is :", calculator(a,b));
*/

// now we are importing object or multiple stuffs
/*
const obj = require("./src.js");
console.log(obj.calculator(4,8));  // we are calculating here 
console.log(obj.x);
*/
// or we can destructure it to use it in convinient way 
const {x,calculator} = require("./src");  // we can even skip writing the .js extension while importing . it is understood
const { calculateMultiply } = require("./calculate/multiply");

calculateMultiply(89,1);


console.log(calculator(4,8));  // now we dont need to write obj everywheree
console.log(x);
var name = "Hii NodeJS";

let  a = 6; 
let b = 8;

console.log(name);
console.log(a+b);

// console.log(global)

// so as the console print the window as the global when we console this 
//  so would this print global on this . let see

console.log(this)
// no it print {} -> means empty object

// console.log(globalThis)    // so gloablThis is used as a common name for referencing the global object
                            // even in the console globalThis points to  windows
console.log(globalThis === global)
