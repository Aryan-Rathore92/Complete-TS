"use strict";
var firstValue = Symbol();
var secondValue = Symbol();
console.log(firstValue == secondValue); // false
var thirdValue = Symbol('abc');
var fourthValue = Symbol('abc');
console.log(thirdValue == fourthValue); // false
console.log(thirdValue, fourthValue); // Symbol(abc) Symbol(abc)
var uniqueId = Symbol();
const obj = {
    [uniqueId]: 100,
    username: "Aryan"
};
console.log(obj[uniqueId]); // 100
