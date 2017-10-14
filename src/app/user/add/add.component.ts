import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
    selector: 'us-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    form: FormGroup;
    nickname: AbstractControl;
    email: AbstractControl;
    password: AbstractControl;
    
    success:boolean = false;
    failure:boolean = false;
    

    constructor(fb: FormBuilder, private us: UserService) {
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
    async submit() {
        if (this.form.valid) {
            this.success = false;
            this.failure = false;
            try{
                await this.us.add(this.form.value);
                this.success = true;
                this.form.reset();
            }catch(error){
                this.failure = true;
            }
//            
        }

    }

    ngOnInit() {
    }

}
