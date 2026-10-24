"use strict";
/*
 1. what is null datatype
 2. how to use it
 3. what is undefind datatype
 4. how to use undefind
 5. possible values
*/
Object.defineProperty(exports, "__esModule", { value: true });
var val1 = null;
var val = undefined;
var val2 = undefined;
val2 = "aryan";
// console.log(val1, val2);
var username = null;
var login = true;
if (login)
    username = "aryan";
// console.log(username);
var m = undefined;
var n = null;
console.log(m == n); // true 
console.log(m === n); // false
