"use strict";
exports.__esModule = true;
exports.EmailService = void 0;
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.validateEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    EmailService.sendEmail = function (email, body) {
        console.log("email sent with email body ", body);
    };
    return EmailService;
}());
exports.EmailService = EmailService;
