function love(): void {
  console.log("This is an void function");
}
console.log(love());

// never --> which function does not reach at the end point then it will use never
function InfiniteLoop(): never {
  while (true) {
    console.log("Inside loop");
  }
}

function throwError(): never {
  throw new Error("Email doest not found");
}

console.log(throwError());
