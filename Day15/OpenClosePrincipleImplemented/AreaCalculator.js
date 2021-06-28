"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Triangle_1 = require("./Triangle");
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator() {
    }
    AreaCalculator.prototype.TotalArea = function (arrShapes) {
        var area = 0;
        for (var _i = 0, arrShapes_1 = arrShapes; _i < arrShapes_1.length; _i++) {
            var objShape = arrShapes_1[_i];
            area += objShape.Area();
        }
        return area;
    };
    return AreaCalculator;
}());
var areacalc = new AreaCalculator();
var circle1 = new Circle_1.Circle();
circle1.Radius = 3;
var circle2 = new Circle_1.Circle();
circle2.Radius = 3;
var arrCircles = [
    circle1,
    circle2
];
// console.log(areacalc.TotalArea(arrCircles));
// console.log(circle1.Area());
var t1 = new Triangle_1.Triangle(3, 4, 5);
var t2 = new Triangle_1.Triangle(5, 12, 13);
var arrTriangles = [t1, t2];
console.log(t1.Area());
console.log(t2.Area());
console.log(areacalc.TotalArea(arrTriangles));
