import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { InputsComponent } from './inputs/inputs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', component: MyUsersComponent },
    { path: 'inputs', component: InputsComponent }
];