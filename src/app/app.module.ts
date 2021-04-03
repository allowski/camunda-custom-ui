import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {ApiModule} from './api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      bearerExcludedUrls: [],
      config: {
        url: 'http://localhost:9000/auth',
        realm: 'camunda',
        clientId: 'camunda-angular-client'
      },
      initOptions: {
        onLoad: 'login-required',
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApiModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    KeycloakAngularModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
