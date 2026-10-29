"use strict";
/*
keyOf ==> keyOf keyword in TS used to get keys of a type as a union of string
### It is primerly used for type safety when working with object
*/
var traineeData = {
    name: "Aryan",
    age: 18,
    isEmp: true,
};
// type getTarineeDataKeys = keyof traineeDetails;
// var getTarineeKeys: getTarineeDataKeys = "name";
// type getTarineeDataKeys = keyof traineeDetails;
var getTarineeKeys = "age";
getTarineeKeys = "isEmp";
getTarineeKeys = "name";
console.log(getTarineeKeys);
// get obj keys
let ObjKeys = "isEmp";
console.log(ObjKeys);
