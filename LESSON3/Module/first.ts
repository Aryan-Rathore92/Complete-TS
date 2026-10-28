/*
  1.Module --> Self-contained unit of code that encapsulates related functionalities such as
   classess, functions and variables.
*/
import aryanData from "./second";
import { Auth } from "../Inheritance/first";

var helloGuys: aryanData = {
  name: "Sarthak",
  email: "sarthak@gmail.com",
  mobileNo: 1234567890,
  password: "sar@123",
};

console.log(helloGuys);

class getAryanData extends Auth {}

var getValueFromAryanDataClass = new getAryanData();
console.log(
  getValueFromAryanDataClass.login(helloGuys.mobileNo, helloGuys.password),
);
