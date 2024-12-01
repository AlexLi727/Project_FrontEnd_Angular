import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListNursesComponent } from "./list-nurses/list-nurses.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListNursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nurses';
}
