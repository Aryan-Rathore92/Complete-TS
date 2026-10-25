/* 
 1. Interface is a way to define structure of a function, object
 2. It improve useability of code
*/

// Normal Object
var testNormalObj: {
  name: string;
  age: number;
  college: string;
} = {
  name: "Aryan",
  age: 18,
  college: "SRGC",
};
console.log(testNormalObj);

interface Info {
  name: string;
  age: number;
  college: string;
}

var student1: Info = {
  name: "sarthak",
  age: 16,
  college: "KIC",
};

interface forTeacher extends Info {
  subject: string;
}

var teacher: forTeacher = {
  name: "Robin Rathore",
  age: 22,
  college: "GEHU",
  subject: "MERN",
};

interface forDirector extends Info {
  totalFacultyMember: number;
  totalStudents: number;
}
var director: forDirector = {
  name: "Aryan Rathore",
  age: 42,
  college: "Amtiy University",
  totalFacultyMember: 88,
  totalStudents: 10000,
};
console.log(student1, teacher, director);
