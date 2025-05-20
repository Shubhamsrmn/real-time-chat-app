import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  isPrimary!: boolean;
  constructor(private router: Router) {}
  ngOnInit() {
    this.isPrimary = this.router.url.includes('/login-page');
  }

  onLogin() {
    this.router.navigate(['/login-page']);
  }
  onSignUp() {
    this.router.navigate(['/sign-up-page']);
  }
}
