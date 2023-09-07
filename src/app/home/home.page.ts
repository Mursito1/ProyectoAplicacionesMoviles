import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  email: string = ''; // Inicializa con un valor por defecto

  constructor(private loadingController: LoadingController) {}

  ionViewWillEnter() {
    // Lee el correo electrónico de localStorage
    const storedEmail = localStorage.getItem('email');
    console.log(storedEmail); // Agrega esta línea para verificar el valor
    // Verifica si storedEmail no es nulo antes de asignarlo a this.email
    if (storedEmail !== null) {
      this.email = storedEmail;
    }
  }  

  async mostrarSpinner() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se muestra junto al spinner
      duration: 3000 // Duración en milisegundos (3 segundos en este ejemplo)
    });
  
    await loading.present();
  }
}