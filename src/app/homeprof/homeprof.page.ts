import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeprof',
  templateUrl: './homeprof.page.html',
  styleUrls: ['./homeprof.page.scss'],
})
export class HomeprofPage {
  username = localStorage.getItem('username');

  constructor(private router: Router) {} 

  redirectToMostrarQR() {
    console.log('Redirigiendo a mostrarqr');
    this.router.navigate(['/mostrarqr']);
  }

  cerrarsesion() {
    this.router.navigate(['/login']);
  }

}
