/** contional: use 'extends' keyword */

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

type Point<T> = T extends Point3D ? Point3D : Point2D;

function getSize(point: Point<Point2D>): number {
  return point.x * point.y;
}

const point = { x: 10, y: 15 }
console.log(getSize(point))