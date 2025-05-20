import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  imports: [NgClass],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() icon!: string;
}
