var MyDatabase = /** @class */ (function () {
    function MyDatabase() {
        this.numArray = [1, 2, 3, 4, 5];
    }
    MyDatabase.prototype.insert = function (a) {
        try {
            this.numArray.push(a);
        }
        catch (_a) {
            throw new Error('insert failed');
        }
        return true;
    };
    MyDatabase.prototype.update = function (arrindex, val) {
        if (this.numArray.length > arrindex && arrindex >= 0) {
            try {
                this.numArray[arrindex] = val;
            }
            catch (_a) {
                throw new Error('update failed');
            }
            return true;
        }
    };
    MyDatabase.prototype.read = function (arrIndex) {
        if (arrIndex >= 0 && arrIndex < this.numArray.length) {
            return this.numArray[arrIndex];
        }
        return -1;
    };
    MyDatabase.prototype["delete"] = function (arrindex) {
        if (this.numArray.length > arrindex && arrindex >= 0) {
            try {
                delete this.numArray[arrindex];
            }
            catch (_a) {
                throw new Error('update failed');
            }
            return true;
        }
    };
    MyDatabase.prototype.readAll = function () {
        for (var _i = 0, _a = this.numArray; _i < _a.length; _i++) {
            var n = _a[_i];
            console.log(n);
        }
    };
    MyDatabase.numArray = [];
    return MyDatabase;
}());
var db = new MyDatabase();
db.insert(33);
db.readAll();
console.log(MyDatabase.numArray);
