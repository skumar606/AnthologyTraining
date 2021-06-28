var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(10, "John");
//emp.empCode = 20; //Compiler Error
emp.empName = 'Bill';
