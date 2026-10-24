// DataTypes --> Primitive Types, Object Types, Special Types, Advanced Types, function Types
// Primitive Types --> number, string, null, undefind, bigint, symbol, boolean
// Object Types --> Array, Tuple, Object
// Special Types --> any, unknown, void, never
// Advanced Types --> Union, Intersection, Type Alias, Enum, Literal Types, interface
// Function Types --> define a function

/* part 1 (Primitive Types) */
var userName:string = "Aryan";
var age:number = 18.5;
var gender:boolean = true
var work = null
var m:undefined= undefined
var done:symbol = Symbol('name')
// console.log(userName, "=",age,gender)


/* part 2 (Object Types) */
//Array
var arrayNum:number[] = [1,2,3,4,5]
var arrayString: Array<string> = ['name', 'aryan', 'rathore']
// console.log(arrayNum, arrayString);

// Tuple
var firstTuple:[number, string, boolean, null] = [100, 'Aryan', false, null]
// console.log(firstTuple)

// Object
var firstObj: {name:string, age:number} = {name: "Aryan", age: 18}
// console.log(firstObj);


/* part 3 (Special Types) */
var z : any = "aryan"
var storeString: any = 12345
// console.log(a, storeString)

var myName : unknown = "Aryan rathore"
if(typeof myName === 'string'){
//    console.log("This is string type name")
}

function logMessage() : void {
    console.log("This function does not return nothing")
}
// console.log(logMessage())

function giveError() : never{
    throw new Error("Somerhing went wrong")
}
// console.log(giveError())


/* part 4 (Advanced Types) */
// Union
var x:number | string;
x = 123;
x = "Aryan";
// console.log(x);

//Intersection
type Person = { name : string }
type Employee = { salary : number }
type EmployeeDetails = Person & Employee
var emp : EmployeeDetails = { name : "Aryan", salary : 100000 }
// console.log(emp)

// Literal Types
type Role = "admin" | "doctor" | "user"
var userRole : Role = "admin"
// console.log(userRole);

// Type Alias
type User = {
    name : string,
    age : number,
    email : string
}

var userDetails : User = {
    name : "Aryan",
    age : 18,
    email : "aryan@gmail.com"
}
// console.log(userDetails);

// interface
interface JobSeeker {
    name : string
}
interface Devloper extends JobSeeker {
    skills : string[]
}

var finalResult : Devloper = {
    name : "Aryan",
    skills : ["javascript", "typescript"]
}
// console.log(finalResult);

// Enum
enum AssignRole {
   Doctor,  // [0]
   User,  // [1]
   HealthWorker // [2]
}

var Role : AssignRole = AssignRole.HealthWorker
// console.log(Role); // 2


/* part 5 (Function Types) */
function add( a:number, b:number) : number{ // Parameter and return both will be number
    return a+b
}
console.log(add(5,10)); // 15