import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'

const oAuthConfig:AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: 'http://localhost:3000',
  clientId: '708524448385-kcaqhl6bekujutd7u1s217bsr7glk9bm.apps.googleusercontent.com',
  scope: 'openid profile email',
  // responseType: 'code',
  // silentRefreshRedirectUri: true,
  // requestAccessToken: true,
  customQueryParams: {
    'social-auth':  'google'
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    // this.init();
  }

  async init() {
    let accessToken;
     this.oAuthService.configure(oAuthConfig)
    //  this.oAuthService.
    accessToken = this.oAuthService.getAccessToken();
    console.log(accessToken)
    console.log(this.oAuthService.getIdToken())
    this.oAuthService.loadDiscoveryDocument().then(() => {
      // this.oAuthService.initLoginFlow()
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if(this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.loadUserProfile().then((userProfile)=> {
            console.log(JSON.stringify(userProfile))
          })

        } else {
          this.oAuthService.initLoginFlow();
        }
      })
    })
  }
}
