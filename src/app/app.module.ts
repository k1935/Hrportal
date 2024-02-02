

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from "@angular/cdk/overlay";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgxOrgChartModule } from 'ngx-org-chart'
import { NgxEchartsModule } from 'ngx-echarts';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { QuillModule } from 'ngx-quill'
import Quill from 'quill'
import QuillEmoji from 'quill-emoji';
<<<<<<< HEAD
import {CommonService} from './services/common.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
=======
import {CommonService} from './services/common.service'
>>>>>>> 25dd4f78735ce6a8a4c0cc1b9ee361dff4ba35e2
// import { AllUserLeaveAdminPageModule } from './pages/all-user-leave-admin/all-user-leave-admin.module';


Quill.register('modules/emoji-shortname', QuillEmoji.ShortNameEmoji);


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,

  ],
  imports: [
    BrowserModule,
=======
    AppComponent,   
 
  ],
  imports: [
    BrowserModule, 
>>>>>>> 25dd4f78735ce6a8a4c0cc1b9ee361dff4ba35e2
    HttpClientModule,
    ImageCropperModule,
    DragDropModule,
    QuillModule.forRoot(),
    OverlayModule,
    ScrollingModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    NgxOrgChartModule,Ng2SearchPipeModule,
=======
    ReactiveFormsModule,    
    NgxOrgChartModule,
>>>>>>> 25dd4f78735ce6a8a4c0cc1b9ee361dff4ba35e2
    // AllUserLeaveAdminPageModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: CommonService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
