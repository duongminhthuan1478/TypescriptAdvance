/** 
 * keyof: using 'keyof' to obtain union type from all keys in an object 
 * K, Object, V, just is the name to refer argument type passed to it, we can naming any name, But we need to respect convention for readability
 * */

type Person = { name: string, age: number, country: string };

function logGet(obj: Person, key: keyof Person): any; // Specific loget with Person type
function logGet<Object, K extends keyof Object>(obj: Object, key: K): Object[K]; // Make it generic, so we can pass any object to get their key. 
function logGet<Object, K extends keyof Object>(obj: Object, key: K): Object[K] {
  return obj[key];
}

/**
 * 
 * @param obj 
 * @param key 
 * @param value: Object[K] represent for type of K in Object, 
 * eg: if you logSet(person, 'name', number) => error exits because type of K(name) was string;
 */
function logSet<Object, K extends keyof Object>(obj: Object, key: K, value: Object[K]): void;
function logSet<Object, K extends keyof Object, V extends Object[K]>(obj: Object, key: K, value: V): void {
  obj[key] = value;
}

const person: Person = {
  name: 'Thuan.DuongMinh',
  age: 15,
  country: 'Vietnam'
}

logSet(person, 'name', 'Johnathan');
console.log(logGet(person, 'name'));
