import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true; // Permite la navegación a la página de inicio.
    } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión.
      this.router.navigate(['/login']);
      return false; // No permite la navegación a la página de inicio.
    }
  }
}
