class Calendar {
    private holidays: number[][];

    constructor() {
        // let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        this.holidays[1] = [1, 2, 7, 8];
    }

    public getDays(month: number) {
        return this.holidays[month];
    }
}

let c = new Calendar();

console.log(c.getDays(1));