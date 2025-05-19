import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/utils/button/button.component';

@Component({
  selector: 'app-login-page',
  imports: [AuthLayoutComponent, RouterLink, ButtonComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
