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
    email: "",         
    password: "",
    username: "",     
  };
  rememberMe!: boolean;

  constructor(private router: Router, private authService: AuthService, public api: AuthService, private storage: Storage, private ngZone: NgZone, private auth: GuardiaGuard) {
    this.initStorage();
  }

  async initStorage() {
    // Crear la base de datos de almacenamiento
    this.storage = await this.storage['create']();

    console.log('Storage está listo');

    // Puedes realizar operaciones de almacenamiento aquí
  }
 
  login() {
    this.api.getUsuarios().subscribe(
      (usuarios) => {
        // Resto del código...

        if (usuarios && usuarios.length > 0) {
          const email = this.user.email.toLowerCase();
          const password = this.user.password.toLowerCase();
          const username = this.user.username.toLowerCase();

          const usuario = usuarios.find((usuario) => usuario.email.toLowerCase() === usuario || usuario.username.toLowerCase() === username);

          if (usuario && usuario.password.toLowerCase() === password) {
            console.log('Autenticación exitosa');
            this.auth.setAuthenticationStatus(true);

            // Utiliza this.user.Gmail para obtener el correo electrónico del usuario
            const correoUsuario = this.user.email;

            // Lógica de redirección basada en el correo electrónico
            this.redirigirSegunCorreo(correoUsuario);

            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
                alumno: usuario
              }
            };   
            // Mover la lógica de almacenamiento aquí, después de la autenticación exitosa
            if (this.rememberMe) {
              localStorage.setItem('credentials',  this.user.email);
              localStorage.setItem('nombre',  this.user.username);
              console.log('Credenciales guardadas en localStorage');
            } else {
              // Si no está marcado, elimina las credenciales almacenadas
              localStorage.removeItem('credentials');
              console.log('Credenciales eliminadas de localStorage');
            }
          } else {
            console.log('Autenticación fallida: Credenciales incorrectas');
            this.router.navigate(['/login']);
          }
        } else {
          console.error('La respuesta de la API es un array vacío o nulo');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
        if (error.status === 401) {
          console.log('Error de autenticación: Credenciales incorrectas');
          this.router.navigate(['/login']);
        } else {
          console.error('Otro tipo de error:', error);
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // Método para redirigir según el correo electrónico
  private redirigirSegunCorreo(correo: string) {
    // Obtener la parte del dominio del correo electrónico
    const dominio = correo.split('@')[1];

    // Lógica de redirección basada en la parte del dominio
    if (dominio === 'duoc.cl') {
      // Redirigir a una página específica para correos con dominio "duoc.cl"
      this.router.navigate(['/home']);
    }
    else if(dominio==='profesor.duoc.cl'){
      this.router.navigate(['/home-profesor']);
    }  
  }
}
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  user = {
    usuario: "",
    password: ""
  };

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.user.usuario, this.user.password)) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.router.navigate(['/login']);
    }
  }

}