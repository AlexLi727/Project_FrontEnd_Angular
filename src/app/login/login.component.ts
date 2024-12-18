import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name = '';
  password = '';

  data = [
    { "name": "Alex", "password": "123" },
    { "name": "Xavi", "password": "AlexAlabau" },
    { "name": "Cookiezi", "password": "Valorant" },
    { "name": "Antonio", "password": "BigBoss" },
    { "name": "Manolito", "password": "GollumGOTY" }
  ];

  constructor(private router: Router) { }

  login(): void {
    let nurse = NursesServiceService.nurses.find(u => u.first_name === this.name && u.password === this.password);

    if (nurse) {
      this.router.navigate(['list-nurses']);
    } else {
      alert("Credenciales incorrectos");
      NursesServiceService.nurses.push({"id": 11, "first_name": this.name, "last_name":"dasfasdf", "password": this.password});
    }

  };
}