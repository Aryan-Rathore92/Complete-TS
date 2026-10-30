/*
=> In TS Utility Types are built-in types that helps transform or manipulate other types in convenient way 
==> Utility [ Partial, Required, ReadOnly, Pick ]
*/

// Partial [ Makes all properties optional, It is completely depend on you if you want to pass property or not ]
interface SarthakDetailes {
  name: string;
  class: number;
  location: string;
  stream?: string;
}

var SarthakData: Partial<SarthakDetailes> = {
  name: "sarthak",
  class: 11,
  //   location: "Dehradun",
  //   stream: "PCM",
};

console.log(SarthakData);

function Chrome(data: Partial<SarthakDetailes>) {
  console.log(data);
}
Chrome({ name: "Aryan", location: "MZN" });

// Required [ Every property is required, anyone is not optional after using Required]
function Devansh(data: Required<SarthakDetailes>) {
  console.log(data);
}
Devansh({ name: "Devansh", class: 10, location: "A", stream: "PCM" });

// Readonly [ Only you can access prperties not make changes in properties ]
var learnReadOnly: Readonly<SarthakDetailes> = {
  name: "Sarthak Rathore",
  class: 12,
  location: "XYZ",
};

// learnReadOnly.location = "A"; // That is not allow because it read only, you can't change properties
console.log(learnReadOnly);

// Pick
function learningPick(data: Pick<SarthakDetailes, "name" | "location">) {
  console.log(data);
}

learningPick({ name: "Aryan rathore", location: "Noida" });
