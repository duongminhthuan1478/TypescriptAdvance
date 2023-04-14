type Name = { name: string };
type Age = { age: number };
type Union = Name | Age;
type Intersection = Name & Age;


const name1 = { name: 'Duong' };
const age = { age: 29 };
const nameAndAge = { name: 'Duong', age: 29 };

let union: Union;
union = name1;
union = age;
union = nameAndAge;

let intersection: Intersection;
intersection = nameAndAge;
// intersection = name1; //Error
// intersection = age; // Error