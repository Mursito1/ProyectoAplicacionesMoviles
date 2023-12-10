import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrarqr',
  templateUrl: './mostrarqr.page.html',
  styleUrls: ['./mostrarqr.page.scss'],
})
export class MostrarqrPage implements OnInit {

  constructor(private router: Router) {} 

  ngOnInit() {
  }

  cerrarsesion() {
    this.router.navigate(['/login']);
  }
}
