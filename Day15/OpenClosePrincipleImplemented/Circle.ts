import { Shape } from './Shape';

class Circle implements Shape {

   public Area(): number {
      let area: number;
      area = this.Radius * this.Radius * Math.PI;
      return area;
   }
   public Radius: number
}

export { Circle };