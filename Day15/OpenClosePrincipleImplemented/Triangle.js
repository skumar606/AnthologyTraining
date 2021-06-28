"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a, this.b = b, this.c = c;
    }
    Triangle.prototype.Area = function () {
        var a = this.a, b = this.b, c = this.c;
        var s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    };
    return Triangle;
}());
exports.Triangle = Triangle;
