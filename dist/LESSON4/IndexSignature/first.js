"use strict";
/*
 => Index Signature in TS allows you to define object with dynamic keys while specifiying the type of their values
 => How to use it with flexible Object shapes
 => How to use readOnly key

*/
// flexible Object shapes { Some keys is must required(name , email, password) and some is optional(age, city, college) }
var IndexSignatureData = {
    name: "Aryan",
    email: "aryan@gmail.com",
    password: "12Aqrqqyau@",
    age: 18,
    //   city: "Dehradun",
    //   college: "SRGC",
};
//  IndexSignatureData.age = 20; // That will give error due to readOnly
console.log(IndexSignatureData);
