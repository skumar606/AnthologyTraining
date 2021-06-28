class Student {
    studCode: number;
    studName: string;

    constructor(code: number, name: string) {
        this.studName = name;
        this.studCode = code;
    }

    

    getGrade(): string {
        return "A+";
    }
}

let s = new Student(1, "Jane");
console.log(s.getGrade());

box Box1 = new Box();        // Declare Box1 of type Box
            Box Box2 = new Box();
            double volume;


            // Declare Box2 of type Box
            // box 1 specification
            Box1.setLength(6.0);
            Box1.setBreadth(7.0);
            Box1.setHeight(5.0);