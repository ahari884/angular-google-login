import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  loginUrl: 'https://www.linkedin.com/oauth/v2/authorization',
  tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
  redirectUri: window.location.origin,
  clientId: '78pxpcgmw79s7f',
  // dummyClientSecret: 'YOUR_CLIENT_SECRET', // not used on frontend but needed for config
  scope: 'r_liteprofile r_emailaddress',
  responseType: 'code',
  oidc: false,
  requireHttps: false,
  showDebugInformation: true,
  // usePkce: true,
  customQueryParams: {
    // LinkedIn sometimes requires `state`
    state: 'xyz'
  }
};

@Injectable({
  providedIn: 'root'
})
export class LinkedLoginService {

  constructor(private oAuthService: OAuthService) { }

  init() {
    this.oAuthService.configure(authConfig);
    // this.oAuthService.tryLoginCodeFlow();
    this.oAuthService.initLoginFlow()
    console.log('asdfasd')
  }
}
