"use strict";
function love() {
    console.log("This is an void function");
}
console.log(love());
// never --> which function does not reach at the end point then it will use never
function InfiniteLoop() {
    while (true) {
        console.log("Inside loop");
    }
}
function throwError() {
    throw new Error("Email doest not found");
}
console.log(throwError());
