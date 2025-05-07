import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GoogleApiService } from './google-api.service';
import { HttpClient } from '@angular/common/http';
import { FacebookLoginService } from './facebook-login.service';
import { LinkedLoginService } from './linked-login.service';

@Component({
  selector: 'app-root',
  providers: [HttpClient],
  imports: [
    RouterOutlet,
    // BrowserModule,
    OAuthModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-google-login';
  constructor(
    // private googleApiService: GoogleApiService,
    // private fbLoginService: FacebookLoginService,
    private linkedLoginService: LinkedLoginService
  ) {
    // this.googleApiService.init()
    // this.fbLoginService.init()
    this.linkedLoginService.init()
  }

  ngOnInit(): void {}

}
