enum CardinalDirectons {
    North,
    South,
    East,
    West
}

let currentDirection = CardinalDirectons.North;
let direction = CardinalDirectons.West
console.log(currentDirection); //output 0
console.log(direction); //output 3

//enums with strings

enum Directions {
    North= "North",
    East= "East",
    South="South",
    West="West"
};
console.log(Directions.North); //output: North

console.log(Directions.West); //output: West

