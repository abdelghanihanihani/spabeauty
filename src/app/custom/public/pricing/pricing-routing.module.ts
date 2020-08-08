import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PricingComponent} from './pricing.component';


export const routes: Routes = [{path: '', component: PricingComponent}] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
