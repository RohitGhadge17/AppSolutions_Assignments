interface Person {
    name: string;
    age: number;
}

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}" `);
    
}
let person = {
    name: "James",
    age: 27
}

printPersonProperty(person, "name")