import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SplashscreenComponent} from './layout/splashscreen/splashscreen.component';
import {SigninComponent} from './layout/signin/signin.component';
import {SignupComponent} from './layout/signup/signup.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1DLlRv8_1CoYDi6JaceIQ5OG6s2qdydY',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
