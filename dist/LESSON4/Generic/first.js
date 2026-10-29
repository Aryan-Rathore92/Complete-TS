"use strict";
/*
Generics --> Generics in TS allow you to create reuseable components
             that works with a varity of data types while maintaining it's type safety
*/
function beforeGenericProblem(data) {
    return data;
}
let beforeGenericProblemValue1 = beforeGenericProblem("Aryan");
let beforeGenericProblemValue2 = beforeGenericProblem(1000);
console.log(beforeGenericProblemValue1);
// That is not good practise
function useAnyInstedOfGeneric(data) {
    return data;
}
var useAnyInstedOfGenericValue1 = useAnyInstedOfGeneric("Aryan"); // With any keyword it always shows any data type, but we are passing here string
var useAnyInstedOfGenericValue2 = useAnyInstedOfGeneric(12345); // With any keyword it always shows any data type, but we are passing here number
var useAnyInstedOfGenericValue3 = useAnyInstedOfGeneric(true); // With any keyword it always shows any data type, but we are passing here boolean
console.log(useAnyInstedOfGenericValue1, useAnyInstedOfGenericValue2, useAnyInstedOfGenericValue3);
// Generic
function makefncUsingGeneric(data) {
    return data;
}
console.log(makefncUsingGeneric("sarthak")); // That is good which we are passing argument that show which type(string)
console.log(makefncUsingGeneric(123456)); // That is good which we are passing argument that show which type(number)
console.log(makefncUsingGeneric(true)); // That is good which we are passing argument that show which type(boolean)
console.log(makefncUsingGeneric(undefined)); // That is good which we are passing argument that show which type(undefined)
console.log(makefncUsingGeneric(null)); // That is good which we are passing argument that show which type(null)
// Generic with array
function genericWithArray(data) {
    // return data[0];
    return data;
}
console.log(genericWithArray(["sarthak", "devansh", "aryan"]));
