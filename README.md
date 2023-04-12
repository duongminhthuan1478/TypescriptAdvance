# Setup
How to run this project.
- Using  below command line to build typescript to javascript, then you will have lib directory contains all javascript code after build
```
  npx tsc --watch
```
- Run typescript project
```
ts-node src/index.ts | npm start 
```

## What we need to know:
- TYPES NOTE:
1. Tuple Array type: Array fixed number of elements, it's can be difference types
Eg: let dimension: [number, number, string] = [0, 0, "Hello"];



- Convention naming for generic type like K, V, T, and E
2. Actually, you can use arbitrary naming for generic, but we have a convention for developers can more understand what the type which you represented
K, V (Key, Value): represents the type of key, value in the object
E (Element): represents the element type
T: generic type, it's mean any type 