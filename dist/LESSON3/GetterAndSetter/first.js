"use strict";
class BrotherInfo {
    constructor() {
        this._name = "Sarthak";
        this._email = "sarthak@gmail.com";
    }
    //   Getter ( for get the value after adding some info )
    get name() {
        return "Hello " + this._name;
    }
    /* Setter ( set value only not getting the value, if you want
       to get value make a getter or directly use main class data ) */
    set email(value) {
        this._email = "rathore" + value;
    }
}
var sarthakInfo = new BrotherInfo();
console.log(sarthakInfo.name);
sarthakInfo.email = sarthakInfo._email;
console.log(sarthakInfo._email);
