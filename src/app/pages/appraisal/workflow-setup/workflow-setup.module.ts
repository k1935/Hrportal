import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkflowSetupPageRoutingModule } from './workflow-setup-routing.module';

import { WorkflowSetupPage } from './workflow-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkflowSetupPageRoutingModule
  ],
  declarations: [WorkflowSetupPage]
})
export class WorkflowSetupPageModule {}
