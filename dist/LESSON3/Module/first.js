import { Auth } from "../Inheritance/first";
var helloGuys = {
    name: "Sarthak",
    email: "sarthak@gmail.com",
    mobileNo: 1234567890,
    password: "sar@123",
};
console.log(helloGuys);
class getAryanData extends Auth {
}
var getValueFromAryanDataClass = new getAryanData();
console.log(getValueFromAryanDataClass.login(helloGuys.mobileNo, helloGuys.password));
