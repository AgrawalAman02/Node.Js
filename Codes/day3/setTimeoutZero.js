console.log("Hello World ");

var a = 179443;
var b = 22324;

// as the 3000 ms will print after 3 sec aftere alll the execution
// what about 0ms . Would it print immediately before multiply result 
// Big NO! Async function go to call stack only when the call stack in v8 is empty
// first this is offloaded to the libuv , then it check the time which is 0ms so after the call stack is empty then it will print after 0 ms

// so setTimeout has trust issue
setTimeout(()=>{
    console.log("Call me asap ");

}, 0);


// ok this will print after 3 sec . this is async function
setTimeout(() => {
    console.log("called after 3 sec");

}, 3000);


console.log(a*b);
