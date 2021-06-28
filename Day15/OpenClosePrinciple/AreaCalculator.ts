import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

class AreaCalculator {
    public TotalArea(arrRectangles: Rectangle[]): number {
        let area: number;
        for (let objRectangle of arrRectangles) {
            area += objRectangle.Height * objRectangle.Width;
        }
        return area;
    }
}
class AreaCalculator1 {
    public TotalArea(arrObjects: object[]): number {
        let area: number;
        for (let obj of arrObjects) {
            if (obj instanceof Rectangle) {
                area += obj.Height * obj.Width;
            }
            else if (obj instanceof Circle) {
                area += obj.Radius * obj.Radius * Math.PI;
            }

        }
        return area;
    }
}
