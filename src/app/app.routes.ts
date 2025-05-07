import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    component:AppComponent,
    path: '',
    pathMatch: 'full',
    // canActivateChild:
  },
  {
    component: SignupComponent,
    path: 'auth/signup',
    canActivate: [],
    pathMatch: 'full'
  }
];
