import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

//Tarjeta
import {MatCardModule} from '@angular/material/card';

//Menu
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

//Selector
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


//Icono Menu
import {MatIconModule} from '@angular/material/icon';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatCardModule,
    MatMenuModule, 
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
