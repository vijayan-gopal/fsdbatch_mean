import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { BadgeComponent } from './components/badge.component';

@NgModule({
  declarations: [
    AppComponent, CardComponent, BadgeComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }