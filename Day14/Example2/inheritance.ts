class WorkItem {
    id: number;
    title: string;
    description: string;
    jobLength: number;

    constructor(id: number, title: string, description: string, jobLength: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.jobLength = jobLength;
    }

    updateJobLength(length: number) {
        return this.jobLength = length;
    }
}

class ChangeOrder extends WorkItem {
    constructor(id: number, title: string, description: string, jobLength: number) {
        super(id, title, description, jobLength);
    }

    display() {
        console.log(`jobLength = ${this.jobLength}`)
    }
}

let obj1 = new ChangeOrder(1, 'work1', 'simple work', 4);

let res1 = obj1.updateJobLength(6);
obj1.display();


class Bicycle {
    pedal: number;
    wheels: number;

    constructor(pedal: number, wheels: number) {
        this.pedal = pedal;
        this.wheels = wheels;
    }

    displayPrice() {
        console.log("price = 4000")
    }
}

class RaceBicycle extends Bicycle {
    gear: boolean;

    constructor(pedal: number, wheels: number, gear: boolean) {
        super(pedal, wheels);
        this.gear = gear;
    }

    displayPrice() {
        console.log("price = 5000")
    }
}

let obj2 = new RaceBicycle(2, 2, true);

obj2.displayPrice();