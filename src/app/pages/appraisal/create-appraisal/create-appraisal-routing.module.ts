import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAppraisalPage } from './create-appraisal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAppraisalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAppraisalPageRoutingModule {}
