var tuple1 : [string, boolean, number] = ["Aryan", true, 18]

tuple1.push('Sarthak')

var tuple2 : readonly[number, string] = [18, "Sarthak"];
// tuple2.push('aryan') // That is not allow because tuple2 is readOnly
console.log(tuple1, tuple2);

