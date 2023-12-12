import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email = localStorage.getItem('credentials') || '';
  username = localStorage.getItem('username') || '';

  constructor(private router: Router) {} 


  

  // ...
  
  scanQRCode() {
    BarcodeScanner.scan().then(
      result => {
        if (!result.cancelled) {
          console.log('Código QR escaneado:', result.text);
        }
      },
      error => {
        console.error('Error al escanear el código QR:', error);
      }
    );
  }
  

  cerrarsesion() {
    this.router.navigate(['/login']);
  }
}