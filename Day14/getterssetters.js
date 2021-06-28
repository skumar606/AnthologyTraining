class Person {
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
try {
    let person = new Person();
    person.age = 10;
    person.age = 0;
}
catch (Error) {
    console.log(Error);
}
