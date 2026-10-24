/*
 1. Apply number datatype
 2. Redeclare issue
 3. How to add numbers with datatype
 4. How to use binary, octal and hexadecimal numbers
 5. convert string to number
 6. type inference with number
 7. decimal with number datatype
*/

var numberOne : number = 5
var numberTwo : number = 10
var total:number = numberOne + numberTwo
// console.log(total);

// Using binary, octal, hexadecimal values
var octal : number = 0o175 // 125
var binary : number = 0b0000010 // 2
var hexadecimal : number = 0x189ADEF // 25800175
// console.log(octal, binary, hexadecimal);

// 5. convert string to number
var valueOne:number = 100;
var ValueTwo = "50";
var val3 = Number(ValueTwo)
var valueFour = +ValueTwo
console.log(valueOne + valueFour);