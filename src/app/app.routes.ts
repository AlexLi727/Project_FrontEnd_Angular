import { Routes } from '@angular/router';
import { ListNursesComponent } from './list-nurses/list-nurses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'list-nurses', component: ListNursesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];