class box {
    private length: number;   // Length of a box
    private breadth: number;  // Breadth of a box
    private height: number;   // Height of a box

    constructor() {
        console.log("The Box object is being created");
    }

    public setLength(len: number): void {
        this.length = len;
    }

    public setBreadth(bre: number): void {
        this.breadth = bre;
    }

    public setHeight(hei: number): void {
        this.height = hei;
    }
    public getVolume(): number {
        return this.length * this.breadth * this.height;
    }

}

let box1 = new box();        // Declare Box1 of type Box

let volume: number;


// Declare Box2 of type Box
// box 1 specification
box1.setLength(6.0);
box1.setBreadth(7.0);
box1.setHeight(5.0);

console.log(box1.getVolume());


//Create a Class accountant with a void method doWork which prints to the screen
//Create a class triangle and calculate area
//Create  a class trainee with a method goal that prints the goal of the trainee
//Create a class trainer with a method goal 