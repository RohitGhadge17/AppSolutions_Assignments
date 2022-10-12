//partial

// interface Point {
//     x: number;
//     y: number;
// }

// let pointPart: Partial<Point> = {};
// pointPart.x = 10;

// console.log(pointPart);

// interface Car {
//     make: string;
//     model: string;
//     mileage?: number;
// }

// let myCar: Required<Car> = {
//     make: 'Ford',
//     model: 'Fiesta',
//     mileage: 20  //as we stated required mileage needs to be defined
// }

// console.log(myCar);

//Record 

// const nameAgeMap: Record<string, number> = {
//     'Alice': 21,
//     'Bob': 25
// }
// console.log(nameAgeMap);

//omit removes keys from object type

// interface Person {
//   name: string;
//   age: number;
//   location?: string;
// }

// const bob: Omit<Person, 'age' | 'location'> = {
//   name: 'Bob'
//   // `Omit` has removed age and location from the type.
// };

// console.log(bob);

// interface Person {
//     name: string;
//     age: number;
//     location?: string
// }

// const bob: Pick<Person, 'name'> = {
//     name: "Bob"
//     //takes in only the selected field i.e name
// }

// console.log(bob);

type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = 26;
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof value);




