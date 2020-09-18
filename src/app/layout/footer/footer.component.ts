import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ['', [
                Validators.required
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            message: ['', [
                Validators.required
            ]],
        });
    }

    submitMessage() {
        if (this.contactForm.valid) {
            // Logic
            alert(`Message received from ${this.contactForm.value.name} : ${this.contactForm.value.message}`);
        }
        else {
            // Handle error
            console.error('Form Not valid');
        }

    }

    get name() {
        return this.contactForm.get('name');
    }
    get email() {
        return this.contactForm.get('email');
    }
    get message() {
        return this.contactForm.get('message');
    }

}
