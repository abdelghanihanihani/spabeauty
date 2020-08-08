import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SplashscreenComponent} from "./layout/splashscreen/splashscreen.component";
import {SigninComponent} from "./layout/signin/signin.component";
import {SignupComponent} from "./layout/signup/signup.component";


const routes: Routes = [{path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'splash', component: SplashscreenComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'public',
    loadChildren: '../app/custom/public/public.module#PublicModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
