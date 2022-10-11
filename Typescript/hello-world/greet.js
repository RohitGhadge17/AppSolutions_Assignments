// function greet(person:string, date:Date) {
//     console.log(`Hello ${person}, today is ${date}`);
// }
// greet("Jason", Date());
//gives error 'string' is not assignable to parameter date'
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("Jason", new Date());
