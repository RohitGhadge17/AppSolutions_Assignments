//defining a tuple
let ourTuple: [number, boolean, string];

//initialize tuple
ourTuple = [5,false, 'Hello World']; //no error

//ourTuple = [false, 5, "Hello world"]; //gives error as the positions are changed
console.log(ourTuple);


const ourReadonlyTuple: readonly [number,boolean,string] = [5,false,"Hello World"];

// ourReadonlyTuple = [5,false,"Hello world"];
ourReadonlyTuple.push("Something"); //gives error as we stated readonly
console.log(ourReadonlyTuple);

