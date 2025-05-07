import { Injectable } from '@angular/core';

import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'

const oAuthConfig: AuthConfig = {
  issuer: 'https://www.facebook.com',
  strictDiscoveryDocumentValidation: false,
  // redirectUri: 'http://localhost:3000',
  clientId: '709685208173824',
  scope: 'email public_profile',
  responseType: 'token',
  loginUrl: 'https://www.facebook.com/v19.0/dialog/oauth',
      redirectUri: 'http://localhost:3000/auth/login',//window.location.origin,
      oidc: false,
      showDebugInformation: true,
      requireHttps: false
  // silentRefreshRedirectUri: true,
  // requestAccessToken: true,
}



@Injectable({
  providedIn: 'root'
})
export class FacebookLoginService {

  constructor(private readonly oAuthService: OAuthService) {
    this.init();
  }

  async init() {
    let accessToken;
    this.oAuthService.configure(oAuthConfig)
    // this.oAuthService.initLoginFlowInPopup()
    this.oAuthService.initLoginFlow()
  }
}
