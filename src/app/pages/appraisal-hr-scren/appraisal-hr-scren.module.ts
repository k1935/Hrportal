import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppraisalHrScrenPageRoutingModule } from './appraisal-hr-scren-routing.module';

import { AppraisalHrScrenPage } from './appraisal-hr-scren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppraisalHrScrenPageRoutingModule
  ],
  declarations: [AppraisalHrScrenPage]
})
export class AppraisalHrScrenPageModule {}
