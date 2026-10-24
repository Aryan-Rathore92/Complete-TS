function getInfo(){

    const emailInp = document.getElementById('email') as HTMLInputElement
    const email : string = emailInp.value;

    var usernameInp = document.getElementById('username') as HTMLInputElement
    var username : string = usernameInp.value

    const ageInp = document.getElementById('age') as HTMLInputElement
    const age : string = ageInp.value

    const obj = {
        username: username,
        email: email,
        age: age
    }
    console.log(obj);
    
}
// Make the function accessible to the HTML button
(window as any).getInfo = getInfo;