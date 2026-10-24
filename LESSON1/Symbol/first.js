"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var val1 = Symbol();
var val2 = Symbol();
console.log(val1 == val2); // false
var val3 = Symbol('abc');
var val4 = Symbol('abc');
console.log(val3 == val4); // false
console.log(val3, val4); // Symbol(abc) Symbol(abc)
var uniqueId = Symbol();
const obj = {
    [uniqueId]: 100,
    username: "Aryan"
};
console.log(obj[uniqueId]); // 100
