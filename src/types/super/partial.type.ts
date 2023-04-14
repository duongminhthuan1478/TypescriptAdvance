/**
 * Partial: object type built-in utility typescript to 'Make all properties in T optional'
 * type Partial<T> = {
 *   [P in keyof T]?: T[P];
 * };
*/

interface Super_Point {
  x: number;
  y: number;
};

//same as `{x?: number, y?: number}`
type PartialPoint = Partial<Super_Point>;


var currentState: Super_Point = { x: 10, y: 20 };
function updatePoint(data: PartialPoint) {
  currentState = { ...currentState, ...data }
}

// Can update partial, no need to update full object Super_Point
updatePoint({ y: 200 }); // console.log {x: 10, y: 200}
