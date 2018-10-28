import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyUsersComponent } from './my-users/my-users.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', component: MyUsersComponent }
];