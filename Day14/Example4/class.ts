class Accountant {

    doWork() {
        console.log("done!");
    }
}


class Triangle {
    private a: number;
    private b: number;
    private c: number;

    constructor(a:number, b:number, c:number) {
        this.a=a, this.b=b, this.c=c;
    }

    public area() {
        let a = this.a, b=this.b, c=this.c;
        let s = (a+b+c)/2;
        let res = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        return res;
    }
}


let t1 = new Triangle(3, 4, 5);
console.log(t1.area());


class Trainee {
    goal() {
        console.log("Learn!");
    }
}


class Trainer {
    goal() {
        console.log("Teach!");
    }
}