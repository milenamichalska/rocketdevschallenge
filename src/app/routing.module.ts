import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { HowToComponent } from './how-to/how-to.component';
import { PricingComponent } from './pricing/pricing.component';
import { SupportComponent } from './support/support.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'how-to', component: HowToComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'support', component: SupportComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
