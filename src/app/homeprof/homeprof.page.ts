import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/autenticacion.service';
@Component({
  selector: 'app-homeprof',
  templateUrl: './homeprof.page.html',
  styleUrls: ['./homeprof.page.scss'],
})
export class HomeprofPage {
  state: any;
  user: any;
  constructor(private activeroute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.activeroute.queryParams.subscribe(params => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.user = this.state.user;

      if (!this.authService.isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });
  }
  cerrarsesion() {
    this.router.navigate(['/login']);
  }
  generarqr() {
    this.router.navigate(['/mostrarqr']);
  }
}
