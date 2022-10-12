// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}`);
// }
// printStatusCode(404);
// printStatusCode("404")
function printStatusCode(code) {
    console.log("My status code is ".concat(code.toUpperCase()));
}
printStatusCode(404);
