import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprofPageRoutingModule } from './homeprof-routing.module';

import { HomeprofPage } from './homeprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprofPageRoutingModule
  ],
  declarations: [HomeprofPage]
})
export class HomeprofPageModule {}
