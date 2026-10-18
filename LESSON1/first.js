"use strict";
// DataTypes --> Primitive Types, Object Types, Special Types, Advanced Types, function Types
// Primitive Types --> number, string, null, undefind, bigint, symbol, boolean
// Object Types --> Array, Tuple, Object
// Special Types --> any, unknown, void, never
// Advanced Types --> Union, Intersection, Type Alias, Enum, Literal Types
/* part 1 (Primitive Types) */
var userName = "Aryan";
var age = 18.5;
var gender = true;
var work = null;
var username = undefined;
var done = Symbol('name');
// console.log(userName, "=",age,gender)
/* part 2 (Object Types) */
//Array
var arrayNum = [1, 2, 3, 4, 5];
var arrayString = ['name', 'aryan', 'rathore'];
// console.log(arrayNum, arrayString);
// Tuple
var firstTuple = [100, 'Aryan', false, null];
// console.log(firstTuple)
// Object
var firstObj = { name: "Aryan", age: 18 };
// console.log(firstObj);
/* part 3 (Special Types) */
var a = "aryan";
var storeString = 12345;
// console.log(a, storeString)
var myName = "Aryan rathore";
if (typeof myName === 'string') {
    //    console.log("This is string type name")
}
function logMessage() {
    console.log("This function does not return nothing");
}
// console.log(logMessage())
function giveError() {
    throw new Error("Somerhing went wrong");
}
// console.log(giveError())
/* part 4 (Advanced Types) */
