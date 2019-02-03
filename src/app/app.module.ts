import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PfmeRoutingModule } from './pfme-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    PfmeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
