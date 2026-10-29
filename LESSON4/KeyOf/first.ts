/*
keyOf ==> keyOf keyword in TS used to get keys of a type as a union of string
### It is primerly used for type safety when working with object 
*/

type traineeDetails = {
  name: string;
  age: number;
  isEmp: boolean;
};

var traineeData: traineeDetails = {
  name: "Aryan",
  age: 18,
  isEmp: true,
};

// type getTarineeDataKeys = keyof traineeDetails;
// var getTarineeKeys: getTarineeDataKeys = "name";

// type getTarineeDataKeys = keyof traineeDetails;
var getTarineeKeys: keyof traineeDetails = "age";
getTarineeKeys = "isEmp";
getTarineeKeys = "name";
console.log(getTarineeKeys);

// get obj keys
let ObjKeys: keyof typeof traineeData = "isEmp";
console.log(ObjKeys);
