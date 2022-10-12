// class Person {
//     name: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const person = new Person();
// person.name = "James";
// console.log(person);
// class Person {
//     private name: string;
//     public constructor(name:string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// const person = new Person("James");
// console.log(person.getName());
// class Person {
//     public constructor(private name:string) {}
//     public getName(): string {
//         return this.name
//     }
// }
// const person = new Person("James")
// console.log(person.getName());
// interface Shape {
//     getArea: () => number;
// }
// class Reactangle implements Shape {
//     public constructor (protected readonly width: number, protected readonly height: number) {}
//     public getArea() : number {
//         return this.width * this.height
//     }
// }
// const myRect = new Reactangle(10,20);
// console.log(myRect.getArea());
// interface Shape {
//     getArea: () => number;
// }
// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
//     public getArea():number {
//         return this.width * this.height;
//     }
// }
// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }
// }
// const mySq = new Square(20);
// console.log(mySq.getArea());
//override
// interface Shape {
//   getArea: () => number;
// }
// class Rectangle implements Shape {
//   // using protected for these members allows access from classes that extend from this class, such as Square
//   public constructor(protected readonly width: number, protected readonly height: number) {}
//   public getArea(): number {
//     return this.width * this.height;
//   }
//   public toString(): string {
//     return `Rectangle[width=${this.width}, height=${this.height}]`;
//   }
// }
// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }
//   // this toString replaces the toString from Rectangle
//   public override toString(): string {
//     return `Square[width=${this.width}]`;
//   }
// }
// const mySq = new Square(20);
// console.log(mySq.toString());
//abstract classes
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Polygon));
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
