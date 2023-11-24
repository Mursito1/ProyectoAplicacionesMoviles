import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginprofPageRoutingModule } from './loginprof-routing.module';

import { LoginprofPage } from './loginprof.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginprofPageRoutingModule
  ],
  declarations: [LoginprofPage]
})
export class LoginprofPageModule {}
