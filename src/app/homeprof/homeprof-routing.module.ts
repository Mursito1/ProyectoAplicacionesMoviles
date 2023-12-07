import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprofPage } from './homeprof.page';

const routes: Routes = [
  {
    path: '',
    component: HomeprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprofPageRoutingModule {}
