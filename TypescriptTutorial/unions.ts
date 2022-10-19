//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'james';
age = 26;
// isLoggedIn = 25;
isLoggedIn = true;

//arrays
let info: string[] = [];
// info = [10,20]
info.push("james");


//unions types
let mixed:(string | number | boolean)[] = [];
mixed.push("hello", 20);
mixed.push(false);+

console.log(mixed);

let uid: string | number;
uid = 'hello';
uid = 30;

//object

let one: object;
one = {name:"james", age: 30};

let ninjaTwo: {
    name:string;
    age:number;
}

ninjaTwo = {name:"james", age:26};
console.log(ninjaTwo);

