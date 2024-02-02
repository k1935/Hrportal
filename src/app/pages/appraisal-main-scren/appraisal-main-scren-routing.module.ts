import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisalMainScrenPage } from './appraisal-main-scren.page';

const routes: Routes = [
  {
    path: '',
    component: AppraisalMainScrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppraisalMainScrenPageRoutingModule {}
