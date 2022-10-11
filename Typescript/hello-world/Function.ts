// function getTime(): number {
//     return new Date().getTime();
// }

function getTime():void {
    console.log(new Date());
}

getTime();

function printHello(): void {
    console.log("Hello");
}
printHello()

//parameters

function multiply(a:number, b:number): void {
    console.log(a*b);
}
multiply(5,2)

//optional parameters

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) : void {
    console.log(a+b+(c||0));
    
}

add(2,5,10)


//Named parameter
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

//rest parameters
function addition(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(addition(10,10,10,10,10));

//Type Alias

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));