import { Component, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../autenticacion.service';
import { GuardiaGuard } from '../guardia.guard';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    username: "",         
    email: "",
    password: "",     
  };
  rememberMe!: boolean;

  constructor(private router: Router, public api: AuthService, private storage: Storage, private ngZone: NgZone, private auth: GuardiaGuard) {
    this.initStorage();
  }

  async initStorage() {
    this.storage = await this.storage.create();
  }
 
  login() {
    this.api.getUsuarios().subscribe(
      (usuarios) => {

        if (usuarios && usuarios.length > 0) {
          const username = this.user.username;
          const email = this.user.email;
          const password = this.user.password;

          const usuario = usuarios.find((usuario) => usuario.username === username || usuario.email === email);

          localStorage.setItem('username', this.user.username);
          
          if (usuario && usuario.password === password) {
            console.log('Autenticación exitosa');
            this.auth.setAuthenticationStatus(true);

            const correoUsuario = this.user.email;

            this.redirectCorreo(correoUsuario);

            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
                usuario: usuario
              }
            };   
            if (this.rememberMe) {
              localStorage.setItem('credentials',  this.user.email);
              localStorage.setItem('username',  this.user.username);
            } else {
              localStorage.removeItem('credentials');
            }
          } else {
            console.log('Autenticación fallida');
            this.router.navigate(['/login']);
          }
        } else {
          console.error('Autenticación fallida');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        if (error.status === 401) {
          console.log('Autenticación fallida');
          this.router.navigate(['/login']);
        } else {
          console.error('Autenticación fallida', error);
          this.router.navigate(['/login']);
        }
      }
    );
  }

  private redirectCorreo(correo: string) {
    const dominio = correo.split('@')[1];
    if (dominio === 'alumno.cl') {
      this.router.navigate(['/home']);
    }
    else if(dominio==='profesor.cl'){
      this.router.navigate(['/homeprof']);
    }  
  }
}
