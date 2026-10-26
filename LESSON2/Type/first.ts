/* 1. type ---> type can define custom datatype like function, object etc.
   2. we can use union (|) with type but not with interface
*/

type DetailSection = { name: string; age: number; email: string };

var work1: DetailSection = {
  name: "abc",
  age: 18,
  email: "abc@abcgamil.com",
};
var work2: DetailSection = {
  name: "kallu",
  age: 10000,
  email: "@gmail.com",
};
console.log(work1, work2);

type lallu1 = { name: string };
type lallu2 = { age: number };

type lallu3 = lallu1 | lallu2; // ( Union using here )

var lallu4: lallu3 = {
  name: "Aryan",
  age: 100,
};
console.log(lallu4);

interface firstName {
  firstName: string;
}
interface fullNameofStudent extends firstName {
  lastName: string;
}

var hey: fullNameofStudent = {
  firstName: "Aryan",
  lastName: "Rathore",
};
console.log(hey);
