
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersService } from './users.service';

import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule    
  ],
  declarations: [
    AddUserComponent
  ],
  providers: [UsersService],
  exports: [
    AddUserComponent
  ]
})
export class UsersModule { }
