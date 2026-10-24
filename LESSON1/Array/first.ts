var arr1 : number[] = [10,20,30,40]
var arr2 : string[] = ['aryan', 'sarthak', 'devansh']

var arr3 : Array<boolean> = [true, false, true]
arr3.push(true)
console.log(arr3);

var arr4 : Array<number> = [1,2,3,4,5]

var arr5 = [...arr4, 6,7,8,9,10]
console.log(arr5);

var clgName: ReadonlyArray<string> = ['srgc', 'iimt', 'bit']
// clgName.push('iet') // that is not allow beacuse that is read only array
console.log(clgName);



