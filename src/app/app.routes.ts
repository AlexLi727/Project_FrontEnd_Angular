import { Routes } from '@angular/router';
import { ListNursesComponent } from './list-nurses/list-nurses.component';

export const routes: Routes = [
  { path: 'list-nurses', component: ListNursesComponent },
  
  { path: '', redirectTo: '/list-nurses', pathMatch: 'full' },
];