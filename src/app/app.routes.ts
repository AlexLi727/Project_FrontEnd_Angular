import { Routes } from '@angular/router';
import { ListNursesComponent } from './list-nurses/list-nurses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FindByNameComponent } from './find-by-name/find-by-name.component';

export const routes: Routes = [
  { path: 'list-nurses', component: ListNursesComponent },
  { path: 'find-by-name', component:  FindByNameComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];