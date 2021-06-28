class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.getFullName());
//console.log(person.ssn); // compile error

//Create a Holiday calendar class with holidays for 2021 month wise
// Create a method to get the holidays for the supplied month 
