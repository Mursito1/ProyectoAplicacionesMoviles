import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Campo de entrada de correo electrónico
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // ... Tu código de autenticación ...
  
    // Guarda el correo electrónico en localStorage
    localStorage.setItem('email', this.email);
    console.log(this.email); // Agrega esta línea para verificar el valor
    // Redirige a la página de inicio
    this.router.navigate(['/home']);
  }
}