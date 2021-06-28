var Accountant = /** @class */ (function () {
    function Accountant() {
    }
    Accountant.prototype.doWork = function () {
        console.log("done!");
    };
    return Accountant;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a, this.b = b, this.c = c;
    }
    Triangle.prototype.area = function () {
        var a = this.a, b = this.b, c = this.c;
        var s = (a + b + c) / 2;
        var res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return res;
    };
    return Triangle;
}());
var t1 = new Triangle(3, 4, 5);
console.log(t1.area());
