import { Component } from '@angular/core';

export interface Like {
    id: number;
    name: string;
    checked?: boolean;
}

export class Student {
    
    constructor (
        public id: string = '',
        public date: string = '',
        public fname: string = '',
        public lname: string = '',
        public address: string = '',
        public state: string = '',
        public city: string = '',
        public zipcode: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public interest: string = '',
        public like: string[] = [],
        public recommend: string = '',
        
    ) { }
}
 
  