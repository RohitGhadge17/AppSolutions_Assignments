// let value: string | undefined | null = null;
// console.log(typeof value);

// value = 'hello';
// console.log(typeof value);

// value = undefined;
// console.log(typeof value);


// optional chaining

// interface House {
//     sqft: number;
//     yard?: {
//         sqft: number;
//     }
// }
// function printYardSize(house: House) {
//     const yardSize = house.yard?.sqft;
//     if(yardSize === undefined) {
//         console.log("No yard");
//     }
//     else {
//         console.log(`Yard is ${yardSize} sqft`)
//     }
// }

// let home: House = {
//     sqft: 500
// };

// printYardSize(home)



//Nullish Coalescence

// function printMileage(mileage: number | null | undefined){
//     console.log(`Mileage: ${mileage ?? 'Not Available'}`)
// }

// printMileage(null);
// printMileage(25)



//Null Assertion

function getValue(): string | undefined {
    return "hello";
}

let value = getValue();
console.log(`value length: `+ value!.length);


