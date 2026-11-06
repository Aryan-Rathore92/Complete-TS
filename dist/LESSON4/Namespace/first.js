"use strict";
/*
=> What is namespace
=> Make two namespace
=> How to run class, functions with namespace
=> How to import namespace
*/
var UserNamespace;
(function (UserNamespace) {
    class loginAuth {
        login() {
            console.log("User logged in sucessfully!");
        }
    }
    UserNamespace.loginAuth = loginAuth;
    function getList() {
        console.log("List Fetched successfully in UserNamespace !");
    }
    UserNamespace.getList = getList;
})(UserNamespace || (UserNamespace = {}));
var AdminNamespace;
(function (AdminNamespace) {
    class loginAuth {
        login() {
            console.log("Admin logged in sucessfully!");
        }
    }
    AdminNamespace.loginAuth = loginAuth;
    const secretData = "https://google.com";
    function getList() {
        console.log("List Fetched successfully in AdminNamespace !", secretData);
    }
    AdminNamespace.getList = getList;
})(AdminNamespace || (AdminNamespace = {}));
// var UserNamespaceData = new UserNamespace.loginAuth();
// AdminNamespace.getList();
// console.log(UserNamespaceData);
