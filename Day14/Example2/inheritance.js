var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WorkItem = /** @class */ (function () {
    function WorkItem(id, title, description, jobLength) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.jobLength = jobLength;
    }
    WorkItem.prototype.updateJobLength = function (length) {
        return this.jobLength = length;
    };
    return WorkItem;
}());
var ChangeOrder = /** @class */ (function (_super) {
    __extends(ChangeOrder, _super);
    function ChangeOrder(id, title, description, jobLength) {
        return _super.call(this, id, title, description, jobLength) || this;
    }
    ChangeOrder.prototype.display = function () {
        console.log("jobLength = " + this.jobLength);
    };
    return ChangeOrder;
}(WorkItem));
var obj1 = new ChangeOrder(1, 'work1', 'simple work', 4);
var res1 = obj1.updateJobLength(6);
obj1.display();
var Bicycle = /** @class */ (function () {
    function Bicycle(pedal, wheels) {
        this.pedal = pedal;
        this.wheels = wheels;
    }
    Bicycle.prototype.displayPrice = function () {
        console.log("price = 4000");
    };
    return Bicycle;
}());
var RaceBicycle = /** @class */ (function (_super) {
    __extends(RaceBicycle, _super);
    function RaceBicycle(pedal, wheels, gear) {
        var _this = _super.call(this, pedal, wheels) || this;
        _this.gear = gear;
        return _this;
    }
    RaceBicycle.prototype.displayPrice = function () {
        console.log("price = 5000");
    };
    return RaceBicycle;
}(Bicycle));
var obj2 = new RaceBicycle(2, 2, true);
obj2.displayPrice();
