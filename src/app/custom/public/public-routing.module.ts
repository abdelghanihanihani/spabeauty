import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicComponent} from "./public.component";


const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    component: PublicComponent,
    // pathMatch: 'full'
    children: [{
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'treatments',
        loadChildren: './treatments/treatments.module#TreatmentsModule'
      },
      {
        path: 'specialists',
        loadChildren: './specialists/specialists.module#SpecialistsModule'
      },
      {
        path: 'pricing',
        loadChildren: './pricing/pricing.module#PricingModule'
      }, {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
