// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}`);
// }

// printStatusCode(404);
// printStatusCode("404")

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}`);
}

printStatusCode(404) // gives error property uppercase does not exist on number