var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.doWork = function () {
        return "Done!";
    };
    Employee.prototype.getSalary = function (days) {
        return 2000 * days;
    };
    return Employee;
}());
var e1 = new Employee();
console.log(e1.doWork());
console.log(e1.getSalary(28));
