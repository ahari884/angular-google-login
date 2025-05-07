import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  loginUrl: 'https://www.linkedin.com/oauth/v2/authorization',
  tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
  redirectUri: /*'https://www.linkedin.com/developers/'*/window.location.origin + '/auth/signup',
  // clientId: '78pxpcgmw79s7f', old
  clientId: '78kc0kl9xbkem8',
  // dummyClientSecret: 'YOUR_CLIENT_SECRET', // not used on frontend but needed for config
  // scope: 'r_liteprofile r_emailaddress',
  scope: 'profile email',
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
