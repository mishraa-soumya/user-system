import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AddUserComponent
  ],
  providers: [
    UsersService
  ],
  exports: [
    AddUserComponent
  ]
})
export class UsersModule { }
