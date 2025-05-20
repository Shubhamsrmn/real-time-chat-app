import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-element',
  imports: [NgClass],
  templateUrl: './nav-element.component.html',
})
export class NavElementComponent {
  @Input() icon!: string;
}
