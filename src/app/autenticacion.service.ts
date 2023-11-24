import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'usuario1', password: '1234' },
    { username: 'profesor', password: '1234' }
  ];

  isAuthenticated = false;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Usuario autenticado con éxito.
      this.isAuthenticated = true;
      return true;
    } else {
      // Autenticación fallida.
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    // Cerrar sesión del usuario.
    this.isAuthenticated = false;
  }
}