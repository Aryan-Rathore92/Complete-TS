/*
=> What is namespace
=> Make two namespace
=> How to run class, functions with namespace
=> How to import namespace
*/

namespace UserNamespace {
  export class loginAuth {
    login() {
      console.log("User logged in sucessfully!");
    }
  }

  export function getList() {
    console.log("List Fetched successfully in UserNamespace !");
  }
}

namespace AdminNamespace {
  export class loginAuth {
    login() {
      console.log("Admin logged in sucessfully!");
    }
  }
  const secretData = "https://google.com";
  export function getList() {
    console.log("List Fetched successfully in AdminNamespace !", secretData);
  }
}

// var UserNamespaceData = new UserNamespace.loginAuth();
// AdminNamespace.getList();
// console.log(UserNamespaceData);
