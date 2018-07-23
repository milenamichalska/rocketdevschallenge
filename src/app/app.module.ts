import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { HowToComponent } from './how-to/how-to.component';
import { SupportComponent } from './support/support.component';
import { RoutingModule } from './/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HowToComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
