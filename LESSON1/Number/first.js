"use strict";
/*
 1. Apply number datatype
 2. Redeclare issue
 3. How to add numbers with datatype
 4. How to use binary, octal and hexadecimal numbers
 5. convert string to number
 6. type inference with number
 7. decimal with number datatype
*/
var num1 = 5;
var num2 = 10;
var total = num1 + num2;
// console.log(total);
// Using binary, octal, hexadecimal values
var octal = 0o175; // 125
var binary = 0b0000010; // 2
var hexadecimal = 0x189ADEF; // 25800175
// console.log(octal, binary, hexadecimal);
// 5. convert string to number
var val1 = 100;
var val2 = "50";
var val3 = Number(val2);
var val4 = +val2;
console.log(val1 + val4);
