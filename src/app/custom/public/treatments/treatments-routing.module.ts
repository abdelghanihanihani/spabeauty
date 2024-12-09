import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TreatmentsComponent} from './treatments.component';


export const routes: Routes = [{path: '', component: TreatmentsComponent}] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentsRoutingModule { }
