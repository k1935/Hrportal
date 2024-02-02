import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppraisaViewScrenPageRoutingModule } from './appraisa-view-scren-routing.module';

import { AppraisaViewScrenPage } from './appraisa-view-scren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppraisaViewScrenPageRoutingModule
  ],
  declarations: [AppraisaViewScrenPage]
})
export class AppraisaViewScrenPageModule {}
