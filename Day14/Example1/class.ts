class Employee {
    firstName: string;
    lastName: string;
    age: number;
    role: string;

    constructor() {

    }

    doWork() {
        return "Done!";
    }

    getSalary(days: number) {
        return 2000*days;
    }
}

let e1 = new Employee();

console.log(e1.doWork());
console.log(e1.getSalary(28));