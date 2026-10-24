"use strict";
function getInfo() {
    const emailInp = document.getElementById('email');
    const email = emailInp.value;
    var usernameInp = document.getElementById('username');
    var username = usernameInp.value;
    const ageInp = document.getElementById('age');
    const age = ageInp.value;
    const obj = {
        username: username,
        email: email,
        age: age
    };
    console.log(obj);
}
// Make the function accessible to the HTML button
window.getInfo = getInfo;
