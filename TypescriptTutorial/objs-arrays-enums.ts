// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Jason",
//     age: 26,
//     hobbies: ['Sports','Cooking'],
//     role: [2, 'author']
// }


enum Role {ADMIN, READ_ONLY, AUTHOR};
const person = {
    name: "Jason",
    age: 26,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
}

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    
}

if(person.role === Role.AUTHOR) {
    console.log("is author")
}