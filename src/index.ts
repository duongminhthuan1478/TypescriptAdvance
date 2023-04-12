import { Person, addFullName } from './generics/generic-intersection';
import { Queue } from './generics/queue';


// ------------- Test: Generic type --------------/
const queue = new Queue<number>();
queue.push(123);
queue.push(456);
// queue.push("abc"); //Error type, => cannot push because generic type T handled error on it
console.log(queue.pop());
console.log(queue.pop());


// ------------- Test Generic - intersection type --------------/
const person: Person = addFullName({
  firstName: 'Thuan',
  lastName: 'Duong Minh',
  email: 'duongminhthuan1478@gmail.com',
  birthDate: '1997'
})
console.log("addFullName-called", person.fullName);


