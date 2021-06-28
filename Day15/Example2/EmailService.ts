export class EmailService {
    static validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static sendEmail(email: string, body: string) {
        console.log("email sent with email body ", body);
    }
}