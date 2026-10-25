"use strict";
function first() {
    return 100;
}
console.log(first());
function second() {
    return true;
}
console.log(second());
function third() {
    var type = "age";
    var data = 100;
    var name = "Aryan";
    if (type === 'age') {
        return data;
    }
    else {
        return name;
    }
}
console.log(third());
function anything() {
    // return "Aryan";
    // return 1000;
    // return true;
    return ['a', 'b', 'c'];
}
console.log(anything());
function blank() {
    console.log("This is an void fnc");
}
console.log(blank());
