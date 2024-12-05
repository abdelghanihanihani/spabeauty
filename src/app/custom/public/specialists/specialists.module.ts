import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsComponent } from './specialists.component';


@NgModule({
  declarations: [SpecialistsComponent],
  imports: [
    CommonModule,
    SpecialistsRoutingModule
  ]
})
export class SpecialistsModule { }
