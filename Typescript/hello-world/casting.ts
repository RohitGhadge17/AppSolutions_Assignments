// let x: unknown = "hello";
// console.log((x as string).length)

// let x: unknown = "hello";
// console.log((<string>x).length)

//force casting

let x = "hello";
console.log(((x as unknown) as number).length);
//error length property does not exist on number type
