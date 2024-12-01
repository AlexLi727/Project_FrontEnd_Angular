import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-nurses',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-nurses.component.html',
  styleUrls: ['./list-nurses.component.css']
})
export class ListNursesComponent {
  nurses = [
    { id: 1, first_name: 'Guillemette', last_name: 'Yole' },
    { id: 2, first_name: 'Sylvester', last_name: 'Minnock' },
    { id: 3, first_name: 'Jennifer', last_name: 'Miranda' },
    { id: 4, first_name: 'Malory', last_name: 'Kingsly' },
    { id: 5, first_name: 'Bowie', last_name: 'Fitzsimmons' },
    { id: 6, first_name: 'Gothart', last_name: 'Brattell' },
    { id: 7, first_name: 'Brockie', last_name: 'Rookes' },
    { id: 8, first_name: 'Tiff', last_name: 'Liddell' },
    { id: 9, first_name: 'Carine', last_name: 'Whennam' },
    { id: 10, first_name: 'Suellen', last_name: 'Jenkerson' },
  ];
}