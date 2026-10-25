"use strict";
var obj1 = {
    name: "Aryan",
    age: 18,
    course: "Btech"
};
// console.log(obj1);
var obj2 = {
    name: "Sarthak",
    age: 18,
    course: true,
    company: undefined
};
obj2.name = "Devansh";
obj2.company = "Google";
// console.log(obj2);
// for add multiple key value after object creation
var userDataObj = {
    name: "Aryan",
    age: 18
};
userDataObj.company = "Google";
userDataObj.city = "Noida";
userDataObj.mobile = 9259544288;
userDataObj.todayPresent = false;
userDataObj.remainSalary = undefined;
// console.log(userDataObj);
// Nested Obj
var obj3 = {
    name: "Sarthak",
    age: 18,
    address: {
        HouseNo: 17,
        Pin: 251316,
        district: "MZN"
    }
};
console.log(obj3.address);
