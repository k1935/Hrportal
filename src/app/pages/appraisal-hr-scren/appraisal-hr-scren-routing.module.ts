import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisalHrScrenPage } from './appraisal-hr-scren.page';

const routes: Routes = [
  {
    path: '',
    component: AppraisalHrScrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppraisalHrScrenPageRoutingModule {}
