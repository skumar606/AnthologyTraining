import {Shape} from './Shape'

export class Triangle implements Shape {
    a: number;
    b: number;
    c: number;
    constructor(a: number, b: number, c: number) {
        this.a=a, this.b=b, this.c=c;
    }
    Area() {
        let a=this.a, b=this.b, c=this.c;
        const s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c)); 
    }
}