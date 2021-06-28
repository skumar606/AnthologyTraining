"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.Area = function () {
        var area;
        area = this.Radius * this.Radius * Math.PI;
        return area;
    };
    return Circle;
}());
exports.Circle = Circle;
