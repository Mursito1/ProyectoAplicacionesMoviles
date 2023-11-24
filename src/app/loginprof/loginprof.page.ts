import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../autenticacion.service';

@Component({
  selector: 'app-loginprof',
  templateUrl: './loginprof.page.html',
  styleUrls: ['./loginprof.page.scss'],
})
export class LoginprofPage implements OnInit {
  user = {
    usuario: "",
    password: ""
  };

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.authService.login(this.user.usuario, this.user.password)) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      };
      this.router.navigate(['/homeprof'], navigationExtras);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
