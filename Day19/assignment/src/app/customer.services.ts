import { Injectable } from "@angular/core";

@Injectable()
export class CustomerService {
    customers = [
        { name: 'Maria' },
        { name: 'Oliver' },
        { name: 'Walter' },
        { name: 'Lakshmi' },
        { name: 'Yasha' }
    ];
}