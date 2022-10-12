// interface Reactangle {
//     height: number,
//     width:number
// };

// const reactangle: Reactangle = {
//     height: 20,
//     width: 10
// };

// console.log(reactangle);


interface Reactangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Reactangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}

console.log(coloredRectangle);
