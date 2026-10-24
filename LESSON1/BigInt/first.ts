// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

var num1 = 9007199254740991
var m = 1
var n = 2
// console.log(num1 + m); // 9007199254740992
// console.log(num1 + n); // 9007199254740992 (issue)

var num2 = 9007199254740991n
var x = 1n
var y = 2n
console.log(num2 + x); // 9007199254740992n
console.log(num2 + y); // 9007199254740993n









