import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UsersModule } from './../../users.module';
import { User } from '../../user';

import { UsersService } from '../../users.service';

import { Observable } from 'rxjs/observable';

@Component({
    'selector': 'app-add-user',
    'templateUrl': './add-user.component.html',
    'providers': [UsersService]
})

export class AddUserComponent implements OnInit {
    title = 'Registration Forms';
    RegForm: FormGroup;
    model: User[] = [];
    constructor(
        private UsersService: UsersService,
        private fb: FormBuilder) {}
    ngOnInit () {
        this.RegForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this.fb.array([
                this.initAddress(),
            ])
        });
    }

initAddress () {
    return this.fb.group({
    street: ['', Validators.required],
    postcode: ['', Validators.required]
    });
}

addAddress () {
    const control = <FormArray>this.RegForm.controls['addresses'];
    control.push(this.initAddress());
}

removeAddress(i: number) {
  const control = <FormArray>this.RegForm.controls['addresses'];
  control.removeAt(i);
}

saveForm({ value, valid }: {value: User, valid: boolean}) {
    console.log(value);
    console.log(valid);
    let userOperation: Observable<User>;
    if (valid === true) {
        userOperation = this.UsersService.saveUserData(value);
        userOperation.subscribe();
    }
}
}
