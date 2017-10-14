import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
    selector: 'fm-reactive',
    templateUrl: './reactive.component.html',
    styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

    form: FormGroup;
    nickname: AbstractControl;
    email: AbstractControl;
    password: AbstractControl;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            'nickname': [//nazwa kontrolki
                '',//stan
                Validators.required
            ],
            'email': [
                '',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            'password': [
                '',
                [
                    Validators.required
                ]
            ]
        });
        this.nickname = this.form.get('nickname');
        this.email = this.form.get('email');
        this.password = this.form.get('password');

    }
    submit() {
        if (this.form.valid) {
            console.log(this.form.value);
        }

    }

    ngOnInit() {
    }

}
