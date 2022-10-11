// function getTime(): number {
//     return new Date().getTime();
// }
function getTime() {
    console.log(new Date());
}
getTime();
function printHello() {
    console.log("Hello");
}
printHello();
//parameters
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 2);
//optional parameters
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    console.log(a + b + (c || 0));
}
add(2, 5, 10);
//Named parameter
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//rest parameters
function addition(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(addition(10, 10, 10, 10, 10));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
