// modules protect their variables and function form leaking

console.log("Hola Src .js file  ");

const calculator = (a,b)=>{
    return a+b;
}
let x = 11;
// module.exports = calculator;

// if we want to export multiple things then how do we export it ?
//  we will export it by wrapping in {} or in the form of objects
// e.g. if we want to export both function and x


/*
module.exports = {
    x : x,
    calculator : calculator
}
 */

// above is the old way of exporting . we can simply pass the key name whih is same as value , js will auto identify it 

module.exports={x,calculator};

// now when we are importing this in other then it will be exported as a object ;