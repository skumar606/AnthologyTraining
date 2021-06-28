import { Shape } from './Shape';

class Rectangle implements Shape {
    public Area(): number {
        let area: number;
        area = this.Height * this.Width;
        return area;
    }
    public Height: number;
    public Width: number;


}

export { Rectangle }