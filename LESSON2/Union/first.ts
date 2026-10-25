var union1: string | number | boolean = "sarthak";
union1 = 1200;
union1 = true;
union1 = 10000000;
// console.log(union1);

function unionTest1(): string | string[] | boolean | number {
  var item = 2;

  if (item > 1) {
    return ["apple", "mango", "banana"];
  } else {
    return "apple";
  }
}

// console.log(unionTest1());

function diffrentParameter(
  data: string | number | boolean | undefined | null | bigint,
) {
  if (typeof data === "string") {
    console.log("Student name is " + data);
  } else if (typeof data === "number") {
    console.log("Student age is " + data);
  }
  if (typeof data === "boolean") {
    console.log("Student present is " + data);
  }
}
console.log(diffrentParameter(true));
