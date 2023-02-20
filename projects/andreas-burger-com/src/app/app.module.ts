import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtomsLibModule } from 'AtomsLib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
