import {EmailService} from './EmailService'

export class UserRegistration {
    register(email: string, username: string) {
        let r1 = EmailService.validateEmail(email);
        if(r1) {
            EmailService.sendEmail(email, `your username is ${username}`);
        } else {
            console.log("email is not valid");
        }
    }
}