import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpecialistsComponent} from './specialists.component';


export const routes: Routes = [{path: '', component: SpecialistsComponent}] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialistsRoutingModule { }
