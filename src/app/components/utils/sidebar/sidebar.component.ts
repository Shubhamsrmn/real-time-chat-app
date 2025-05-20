import { Component, Input } from '@angular/core';
import { NavElementComponent } from './nav-element/nav-element.component';

@Component({
  selector: 'app-sidebar',
  imports: [NavElementComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isSidebar!: boolean;
}
