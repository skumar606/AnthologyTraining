"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.Area = function () {
        var area;
        area = this.Height * this.Width;
        return area;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
