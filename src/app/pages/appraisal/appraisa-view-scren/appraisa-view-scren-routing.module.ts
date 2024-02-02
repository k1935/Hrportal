import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisaViewScrenPage } from './appraisa-view-scren.page';

const routes: Routes = [
  {
    path: '',
    component: AppraisaViewScrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppraisaViewScrenPageRoutingModule {}
