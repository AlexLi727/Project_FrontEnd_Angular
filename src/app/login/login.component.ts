import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name = '';
  password = '';

  data = [
    {"name": "Alex", "password": "123"},
    {"name": "Xavi", "password": "AlexAlabau"},
    {"name": "Cookiezi", "password": "Valorant"},
    {"name": "Antonio", "password": "BigBoss"},
    {"name": "Manolito", "password": "GollumGOTY"}
  ];

  constructor(private router: Router){}

  login():void{
    let nurse = this.data.find(u => u.name === this.name && u.password === this.password);

    if(nurse){
      alert("Login correcto");
    }else{
      alert("Credenciales incorrectos");
    }
    
  };
}