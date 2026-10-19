"use strict";
/*
  1. Apply string datatype
  2. Ways to define string
  3. Convert in string datatype
  4. Apply boolean datatype
  5. Possible boolean values
  6. Inference and declaraton issue
  7. run with html file
*/
var str1 = "Aryan rathore";
var str2 = 'Aryan rathore';
var username = "Aryan Rathore";
var age = 18;
var str3 = `Name is ${username} and age is ${age} `;
// console.log(str3);
// console.log(str1 + str2 + str3);
var val1 = 100;
var val2 = val1.toString(); // convert number into string
var val3 = "" + val1; // convert number into string
console.log(val3);
var bool1 = true;
var bool2 = false;
var n = 100;
var val4 = Boolean(n);
console.log(val4); // true
