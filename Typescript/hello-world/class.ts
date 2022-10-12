// class Person {
//     name: string;
// }

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

abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`
    }
}

class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number){
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const myRect = new Rectangle(10,20);
console.log(myRect.getArea());






