import { Routes } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

export const appRoutes: Routes = [
     { path: 'users/add', component: AddUserComponent },
     { path: 'users', component: ListUserComponent },
]; 