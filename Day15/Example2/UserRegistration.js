"use strict";
exports.__esModule = true;
exports.UserRegistration = void 0;
var EmailService_1 = require("./EmailService");
var UserRegistration = /** @class */ (function () {
    function UserRegistration() {
    }
    UserRegistration.prototype.register = function (email, username) {
        var r1 = EmailService_1.EmailService.validateEmail(email);
        if (r1) {
            EmailService_1.EmailService.sendEmail(email, "your username is " + username);
        }
        else {
            console.log("email is not valid");
        }
    };
    return UserRegistration;
}());
exports.UserRegistration = UserRegistration;
