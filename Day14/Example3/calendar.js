var Calendar = /** @class */ (function () {
    function Calendar() {
        // let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.holidays[1] = [1, 2, 7, 8];
    }
    Calendar.prototype.getDays = function (month) {
        return this.holidays[month];
    };
    return Calendar;
}());
var c = new Calendar();
console.log(c.getDays(1));
