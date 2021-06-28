class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;


    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
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
