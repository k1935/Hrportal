import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppraisalHrScrenPageRoutingModule } from './appraisal-hr-scren-routing.module';

import { AppraisalHrScrenPage } from './appraisal-hr-scren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppraisalHrScrenPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [AppraisalHrScrenPage]
})
export class AppraisalHrScrenPageModule {}
