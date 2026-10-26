enum UserType {
  student = "student",
  teacher = "teacher",
  faculty = "faculty",
  director = "director",
}

var myProfession = UserType;
console.log(myProfession.student);

enum Fruits {
  a = "apple",
  b = "banana",
  c = "cherry",
}

var myFruit: Fruits = Fruits.b;
console.log(myFruit);

enum blankEnumPointToIndex {
  zeroValue,
  firstValue,
  secondValue,
  thirdValue,
  fourthValue,
}
var checkValues = blankEnumPointToIndex.secondValue;
console.log(checkValues); // 2
