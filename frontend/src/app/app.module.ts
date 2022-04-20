import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import {
  AppRoutingModule,
  routedComponents,
} from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, ...routedComponents, MapComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPnDatU8GFmaTp3-rfJAKmjLS6bPMEjrY',
      libraries: ['places']
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
