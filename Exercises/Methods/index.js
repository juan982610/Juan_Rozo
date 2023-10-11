
const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const longNumbers = numbers.map((number) => number * 2  + 'Este e sun ejemplo de MAp')
console.log(longNumbers);


const exampleReduce = numbers.reduce((previusValue, currentValue) => {
    return previusValue + currentValue
}) 

console.log(exampleReduce);

for (const elemet of numbers) {
  console.log(elemet);
}


const arrayPeople = [
    {name :"Juan", lastname: "Pérez", age: 16},
    {name :"Maria", lastname: "Patiño", age: 30},
    {name :"Esteban", lastname: "Posada", age: 25},
    {name :"Sebas", lastname: "Villa", age: 17},
    {name :"Santiago", lastname: "Ramirez", age: 40},
];

const exampleFillter = arrayPeople.filter( (person) => person.age > 18)
console.log(exampleFillter);

const exampleForEach = arrayPeople.forEach((person) => console.log(person.age * 2));

const exampleFind = arrayPeople.find((person) => person.name === 'Maria');
console.log(exampleFind);


