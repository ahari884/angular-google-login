import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    component: SignupComponent,
    path: 'auth/signup',
    pathMatch: 'full'
  }
];
