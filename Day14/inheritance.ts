class Car {
    Color: string
    constructor(color: string) {
        this.Color = color
    }
    display(): void {
        console.log("base");
    }
}
class Audi extends Car {
    Price: number
    constructor(color: string, price: number) {
        super(color);
        this.Price = price;
    }
    display(): void {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    }
}
let obj = new Audi(" Black", 8500000);
obj.display();


//Base class WorkItem with properties id, title, description , joblength as number of hours
// Method to update the job length 

//Base Class bicycle with pedal and wheels
// racebicycle with gear

