import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { MaterialModule } from '@angular/material';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
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
