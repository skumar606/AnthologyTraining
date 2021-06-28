import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle'

class AreaCalculator {
    public TotalArea(arrShapes: Shape[]): number {
        let area: number = 0;
        for (let objShape of arrShapes) {
            area += objShape.Area();
        }
        return area;
    }
}

let areacalc = new AreaCalculator();
let circle1 = new Circle()
circle1.Radius = 3;

let circle2 = new Circle()
circle2.Radius = 3;

let arrCircles: Shape[] = [
    circle1,
    circle2
]


// console.log(areacalc.TotalArea(arrCircles));

// console.log(circle1.Area());

let t1 = new Triangle(3, 4, 5);
let t2 = new Triangle(5, 12, 13);

let arrTriangles: Shape[] = [t1, t2];

console.log(t1.Area());
console.log(t2.Area());
console.log(areacalc.TotalArea(arrTriangles));