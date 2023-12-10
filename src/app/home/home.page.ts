import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router from '@angular/router'
import { AnimationController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner, BarcodeFormat } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email = localStorage.getItem('credentials') || '';
  username = localStorage.getItem('username') || '';

  constructor(private router: Router) {}  // Inject Router into the component

  cerrarsesion() {
    this.router.navigate(['/login']);
  }
}