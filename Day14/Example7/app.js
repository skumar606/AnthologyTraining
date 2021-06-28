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
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());
var PrintMedia = /** @class */ (function (_super) {
    __extends(PrintMedia, _super);
    function PrintMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintMedia.prototype.advertise = function () {
        return 'Print Media!';
    };
    return PrintMedia;
}(Media));
var SocialMedia = /** @class */ (function (_super) {
    __extends(SocialMedia, _super);
    function SocialMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialMedia.prototype.advertise = function () {
        return 'Social Media!';
    };
    return SocialMedia;
}(Media));
var VoiceMedia = /** @class */ (function (_super) {
    __extends(VoiceMedia, _super);
    function VoiceMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VoiceMedia.prototype.advertise = function () {
        return 'Voice Media!';
    };
    return VoiceMedia;
}(Media));
var pm = new PrintMedia();
var sm = new SocialMedia();
var vm = new VoiceMedia();
console.log(pm.advertise());
console.log(sm.advertise());
console.log(vm.advertise());
