import { Component} from '@angular/core';
import { UsersModule } from './../../users.module';
import { User } from '../../user';

import { UsersService } from '../../users.service';

@Component({
    'selector': 'app-add-user',
    'templateUrl': './add-user.component.html',
    'providers': [UsersService]
})

export class AddUserComponent {
    title = 'Registration Forms';
    model: User[] = [];
    constructor(private UsersService: UsersService) {}
    saveForm(model: User, isValid: boolean) {
        console.log(model);
        this.UsersService.saveUserData(){}
    }
}
