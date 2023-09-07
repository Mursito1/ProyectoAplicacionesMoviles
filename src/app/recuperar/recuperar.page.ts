import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email!: string;

  constructor(public alertController: AlertController, private router: Router) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Se ha enviado un correo de recuperación.',
      buttons: ['OK'],
    });
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });
    await alert.present();
  }
}