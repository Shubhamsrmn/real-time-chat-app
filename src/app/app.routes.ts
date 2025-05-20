import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'sign-up-page', component: SignUpComponent },
];
