
function createAnimal(name: string, age: number) {
  return { name, age }
}

//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
function logAnimal(obj: ReturnType<typeof createAnimal>) { //=> type obj = {name: string, age: number}
  console.log(`Animal name ${obj.name}, age ${obj.age}`);
}

//type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
function logAnimalParams(params: Parameters<typeof createAnimal>) { //=> type params = [name: string, age: number]
  console.log(`Params Animal name ${params[0]}, age ${params[1]}`);
}