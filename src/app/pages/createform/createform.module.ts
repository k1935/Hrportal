import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateformPageRoutingModule } from './createform-routing.module';

import { CreateformPage } from './createform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CreateformPageRoutingModule
  ],
  declarations: [CreateformPage]
})
export class CreateformPageModule {}
