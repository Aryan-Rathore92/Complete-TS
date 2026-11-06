"use strict";
/*
=> We don't need to export other ts file here. we can use directly by linking all js file(through script tag) in single html file
*/
var UserNamespaceData = new UserNamespace.loginAuth();
var AdminNamespaceData = new AdminNamespace.loginAuth();
UserNamespace.getList();
console.log(UserNamespaceData.login());
AdminNamespace.getList();
console.log(AdminNamespaceData.login());
