// const car: {type:string, model:string, year:number} = {
//     type: "Toyota",
//     model: "Innova",
//     year: 2022
// };

// console.log(car);


//This is optional property
const car: {type:string, mileage?: number} = {
    type:"Toyota"
};
car.mileage = 2000;

console.log(car);


//index signature
const nameAgeMap: {[index:string]: number} = {}
nameAgeMap.Jack = 25; //no error
nameAgeMap.Mark = "Fifty" //error using string instead of number