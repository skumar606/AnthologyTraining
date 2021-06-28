interface IDatabase {

    insert(val: any): boolean;
    update(ref: any, val: any): boolean;
    read(ref: any): any;
    delete(ref: any): boolean;
}

class MyDatabase implements IDatabase {

    static numArray: number[] = [];
    numArray = [1, 2, 3, 4, 5];

    constructor() {

    }

    insert(a: number) {
        try {
            this.numArray.push(a);
        }
        catch
        {
            throw new Error('insert failed');
        }
        return true;
    }
    update(arrindex: number, val: number): boolean {
        if (this.numArray.length > arrindex && arrindex >= 0) {
            try {
                this.numArray[arrindex] = val;
            }
            catch
            {
                throw new Error('update failed');
            }
            return true;
        }

    }

    read(arrIndex: number) {
        if (arrIndex >= 0 && arrIndex < this.numArray.length) {
            return this.numArray[arrIndex];
        }
        return -1;
    }


    delete(arrindex: number): boolean {
        if (this.numArray.length > arrindex && arrindex >= 0) {
            try {
                delete this.numArray[arrindex];

            }
            catch
            {
                throw new Error('update failed');
            }
            return true;
        }
    }

    readAll(): void {

        for (let n of this.numArray) {
            console.log(n);
        }
    }


}

let db = new MyDatabase();
db.insert(33);
db.readAll();

console.log(MyDatabase.numArray);