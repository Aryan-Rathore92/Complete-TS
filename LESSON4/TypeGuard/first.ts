/*
TypeGuard ==>> A typeGuard in ts is a technique used to narrow
               down the type of a variable within a condtional block

Types--> typeof, instanceof( check type of like - class), Custom type( check type of like - interface)

=> Provide better type safety
=> Helps TS infer type automatically
*/

// first method
var aryan20: string | number | boolean = "sarthak";

if (typeof aryan20 == "string") {
  console.log(typeof aryan20); // string // narrow down successfull by typeof
  console.log("This is an string");
} else if (typeof aryan20 == "number") {
  console.log(typeof aryan20); // number // narrow down successfull by typeof
  console.log("This is an number ");
} else {
  console.log(typeof aryan20); // boolean // narrow down successfull by typeof
  console.log("this is an boolean value");
}

// second method
class classWithTypeGuard1 {}
var dataWithTypeGuard1 = new classWithTypeGuard1();

class classWithTypeGuard2 {}
var dataWithTypeGuard2 = new classWithTypeGuard2();

function checkDataTypeWithTypeGuard(
  data: classWithTypeGuard1 | classWithTypeGuard2,
) {
  if (data instanceof classWithTypeGuard1) {
    console.log("That data is of dataWithTypeGuard1");
  } else {
    console.log("That data is of dataWithTypeGuard2");
  }
}
checkDataTypeWithTypeGuard(dataWithTypeGuard2);

// third method
interface UserNameAndCity {
  name: string;
  city: string;
}

interface UserEmailAndId {
  id: number;
  email: string;
}

var UserNamewithCity: UserEmailAndId | UserNameAndCity;
UserNamewithCity = {
  name: "Sarthak Rathore",
  city: "MZN",
};

var UserEmailwithId: UserEmailAndId | UserNameAndCity = {
  id: 101828,
  email: "sarthak@gmail.com",
};

function getUserData(data: UserEmailAndId | UserNameAndCity) {
  if ((data as UserEmailAndId).email != undefined) {
    console.log(
      `User email is ${(data as UserEmailAndId).email} and id of user is ${(data as UserEmailAndId).id}`,
    );
  } else {
    console.log(
      `User name is ${(data as UserNameAndCity).name} and city of user is ${(data as UserNameAndCity).city}`,
    );
  }
}

getUserData(UserEmailwithId);
console.log(UserNamewithCity);
