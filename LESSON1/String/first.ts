/*
  1. Apply string datatype
  2. Ways to define string
  3. Convert in string datatype
  4. Apply boolean datatype
  5. Possible boolean values
  6. Inference and declaraton issue
  7. run with html file
*/

var str1 : string = "Aryan rathore"
var str2 : string = 'Aryan rathore'
var username = "Aryan Rathore"
var age = 18
var str3 : string = `Name is ${username} and age is ${age} `
// console.log(str3);
// console.log(str1 + str2 + str3);

var val1 : number = 100
var val2 : string = val1.toString() // convert number into string
var val3 : string = "" + val1 // convert number into string
console.log(val3);

var bool1 : boolean = true
var bool2 = false
var n : number = 100
var val4 = Boolean(n);
console.log(val4) // true


