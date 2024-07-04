import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.css']
})
export class StrengthIndicatorComponent {
  @Input() strength: string = '';

  getClass(index: number): string {
    switch (this.strength) {
      case 'easy':
        return index === 0 ? 'red' : 'gray';
      case 'medium':
        return index < 2 ? 'yellow' : 'gray';
      case 'strong':
        return 'green';
      default:
        return 'gray';
    }
  }
}
