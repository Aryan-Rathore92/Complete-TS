"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const emailInp = document.getElementById('email');
    const email = emailInp.value;
    var usernameInp = document.getElementById('username');
    var username = usernameInp.value;
    const ageInp = document.getElementById('age');
    const age = ageInp.value;
    console.log(email, username, age);
}
