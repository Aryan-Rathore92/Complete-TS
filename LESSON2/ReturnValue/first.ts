function first(){
    return 100;
}
console.log(first());

function second() : boolean{
    return true
}
console.log(second());

function third() : string | number | boolean{
    var type : string = "age"
    var data = 100
    var name = "Aryan"

    if(type === 'age'){
        return data;
    }else{
        return name
    }
}
console.log(third());

function anything() : any {
    // return "Aryan";
    // return 1000;
    // return true;
    return ['a', 'b', 'c'];
}

console.log(anything());