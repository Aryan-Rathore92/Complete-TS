var aryan : string | number | boolean = "Aryan";

aryan = 100
aryan = true
aryan = "sarthak"
// aryan = ['name', 'aryan'] // That will give error beacuse of limited datatype
// console.log(aryan);

// any (We can store any type of data)
var anyVariable : any = "Aryan"
anyVariable = [1,2,3,4,5]
anyVariable = { name : "Aryan", age : 18}
// console.log(anyVariable);


// Unknown ( Befor use any datatype check typeof data )

var unknownVariable : unknown = 100

if( typeof unknownVariable == 'number'){
    unknownVariable = 200
}
unknownVariable = "Aryan";

if(typeof unknownVariable == 'string'){
     unknownVariable = unknownVariable.toUpperCase();
}

console.log(unknownVariable);





