class Voter {
    readonly voterID: number;
    name: string;
    age: number;
    gender: string;

    constructor() {
        this.voterID = 152424;
    }
}

let v1 = new Voter();

v1.name = "J K";
v1.age = 24;
// v1.voterID = 2;
v1.gender = "male";

console.log(v1);