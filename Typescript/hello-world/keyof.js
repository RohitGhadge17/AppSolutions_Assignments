function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\" "));
}
var person = {
    name: "James",
    age: 27
};
printPersonProperty(person, "name");
