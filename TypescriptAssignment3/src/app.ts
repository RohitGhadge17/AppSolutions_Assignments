//interfaces
// interface IsPerson {
//     name:string;
//     age: number;
//     speak(a: string):void;
//     spend(a:number):number;
// }

// const me: IsPerson = {
//     name: "Jason",
//     age: 26,
//     speak(text:string):void {
//         console.log(text); 
//     },
//     spend(amount:number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };
// const greetPerson = (person:IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me);
// console.log(me);




import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let doctwo: HasFormatter;

// docOne = new Invoice("Racheal", 'web work', 250);
// doctwo = new Payment("Jason",'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(doctwo);
// console.log(docs);


// const ivOne = new Invoice('Jason','Work on website',200);
// const ivTwo = new Invoice('John','Work on client requirement',300);

// let invoices: Invoice[] = [];
// invoices.push(ivOne);
// invoices.push(ivTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })




const form  = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);
    list.render(doc, type.value, 'end');
    
})




