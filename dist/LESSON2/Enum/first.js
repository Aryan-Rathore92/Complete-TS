"use strict";
var UserType;
(function (UserType) {
    UserType["student"] = "student";
    UserType["teacher"] = "teacher";
    UserType["faculty"] = "faculty";
    UserType["director"] = "director";
})(UserType || (UserType = {}));
var myProfession = UserType;
console.log(myProfession.student);
var Fruits;
(function (Fruits) {
    Fruits["a"] = "apple";
    Fruits["b"] = "banana";
    Fruits["c"] = "cherry";
})(Fruits || (Fruits = {}));
var myFruit = Fruits.b;
console.log(myFruit);
var blankEnumPointToIndex;
(function (blankEnumPointToIndex) {
    blankEnumPointToIndex[blankEnumPointToIndex["zeroValue"] = 0] = "zeroValue";
    blankEnumPointToIndex[blankEnumPointToIndex["firstValue"] = 1] = "firstValue";
    blankEnumPointToIndex[blankEnumPointToIndex["secondValue"] = 2] = "secondValue";
    blankEnumPointToIndex[blankEnumPointToIndex["thirdValue"] = 3] = "thirdValue";
    blankEnumPointToIndex[blankEnumPointToIndex["fourthValue"] = 4] = "fourthValue";
})(blankEnumPointToIndex || (blankEnumPointToIndex = {}));
var checkValues = blankEnumPointToIndex.secondValue;
console.log(checkValues); // 2
