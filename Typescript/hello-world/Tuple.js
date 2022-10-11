//defining a tuple
var ourTuple;
//initialize tuple
ourTuple = [5, false, 'Hello World']; //no error
//ourTuple = [false, 5, "Hello world"]; //gives error as the positions are changed
console.log(ourTuple);
var ourReadonlyTuple = [5, false, "Hello World"];
// ourReadonlyTuple = [5,false,"Hello world"];
ourReadonlyTuple.push("Something");
console.log(ourReadonlyTuple);
