class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171280926', 'John', 'Doe');
console.log(person.getFullName());


//Create a class BankAccount with methods Deposit and Withdraw
//Create a university class with a method enrol student
//Create a Doctor class with a method BookAppointment
//Create a Bloodbank class with a method bloodavailability