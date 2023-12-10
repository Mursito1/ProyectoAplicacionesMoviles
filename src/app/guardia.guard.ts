import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {

  private isAuthenticated = false;

  constructor(private router: Router) {}

  setAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isAuthenticated) {
        return true;
      } else {
        return this.router.navigate(['/login']);
      }
  }
}
