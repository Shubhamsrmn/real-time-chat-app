import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() buttonClick = new EventEmitter<MouseEvent>();
  onClick = (event: MouseEvent) => {
    this.buttonClick.emit(event);
  };
}
