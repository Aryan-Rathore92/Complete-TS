// Normal Combination
var studentFullName: { name: string } = { name: "Aryan Rathore" };
var studentAge: { age: number } = { age: 18 };

var finalStudentData: { name: string; age: number } = {
  name: "Aryan",
  age: 18,
};
console.log(finalStudentData);

// Intersection with type
type StudentA = { name: string };
type StudentB = { age: number };

type StudentC = StudentA & StudentB;

var requiredStudent: StudentC = { name: "Sarthak Rathore", age: 17 };
console.log(requiredStudent);

// Intersection with interface
interface childA {
  name: string;
}
interface childB {
  age: number;
}
interface childC {
  district: string;
}

type finalChild = childA & childB & childC;

var requiredChild: finalChild = {
  name: "Devansh Rathore",
  age: 5,
  district: "MZN",
};
console.log(requiredChild);
