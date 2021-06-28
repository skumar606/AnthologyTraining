var box = /** @class */ (function () {
    function box() {
        console.log("The Box object is being created");
    }
    box.prototype.setLength = function (len) {
        this.length = len;
    };
    box.prototype.setBreadth = function (bre) {
        this.breadth = bre;
    };
    box.prototype.setHeight = function (hei) {
        this.height = hei;
    };
    box.prototype.getVolume = function () {
        return this.length * this.breadth * this.height;
    };
    return box;
}());
var box1 = new box(); // Declare Box1 of type Box
var volume;
// Declare Box2 of type Box
// box 1 specification
box1.setLength(6.0);
box1.setBreadth(7.0);
box1.setHeight(5.0);
console.log(box1.getVolume());
