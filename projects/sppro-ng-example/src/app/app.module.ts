import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SpproNgAnnoteModule} from '../../../sppro-ng-annote/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpproNgAnnoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
