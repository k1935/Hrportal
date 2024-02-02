import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAppraisalPageRoutingModule } from './create-appraisal-routing.module';

import { CreateAppraisalPage } from './create-appraisal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateAppraisalPageRoutingModule
  ],
  declarations: [CreateAppraisalPage]
})
export class CreateAppraisalPageModule {}
