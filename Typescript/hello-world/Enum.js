var CardinalDirectons;
(function (CardinalDirectons) {
    CardinalDirectons[CardinalDirectons["North"] = 0] = "North";
    CardinalDirectons[CardinalDirectons["South"] = 1] = "South";
    CardinalDirectons[CardinalDirectons["East"] = 2] = "East";
    CardinalDirectons[CardinalDirectons["West"] = 3] = "West";
})(CardinalDirectons || (CardinalDirectons = {}));
var currentDirection = CardinalDirectons.North;
var direction = CardinalDirectons.West;
console.log(currentDirection); //output 0
console.log(direction); //output 3
//enums with strings
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["East"] = "East";
    Directions["South"] = "South";
    Directions["West"] = "West";
})(Directions || (Directions = {}));
;
console.log(Directions.North);
console.log(Directions.West);
