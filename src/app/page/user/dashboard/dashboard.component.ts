import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/utils/sidebar/sidebar.component';
import { ProfileSidebarComponent } from '../../../components/utils/sidebar/profile-sidebar/profile-sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, ProfileSidebarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
