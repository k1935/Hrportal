import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppraisalMainScrenPageRoutingModule } from './appraisal-main-scren-routing.module';

import { AppraisalMainScrenPage } from './appraisal-main-scren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppraisalMainScrenPageRoutingModule
  ],
  declarations: [AppraisalMainScrenPage]
})
export class AppraisalMainScrenPageModule {}
