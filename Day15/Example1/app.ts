interface IStudent {
    firstname: string;
    lastname: string;
    age?: number;
}

let s1: IStudent = {firstname: "Shreekant", lastname: "Tiwari"};
console.log(s1);

interface ITeacher {
    readonly aadharNumber: number;
    firstname: string;
    lastname: string;
    age: number;
}

let t1: ITeacher = {aadharNumber: 921413241324, firstname: "Jaykant", lastname: "Tiwari", age: 42}
// t1.aadharNumber = 475242737364;
console.log(t1);