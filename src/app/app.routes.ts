import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { DashboardComponent } from './page/user/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'sign-up-page', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
];
