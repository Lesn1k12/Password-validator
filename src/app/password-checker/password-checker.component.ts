import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password: string = '';
  strength: string = '';

  checkPasswordStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length < 8) {
      this.strength = '';
    } else if ((hasLetters && hasNumbers && !hasSymbols) || 
               (hasLetters && hasSymbols && !hasNumbers) || 
               (hasNumbers && hasSymbols && !hasLetters)) {
      this.strength = 'medium';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strength = 'strong';
    } else {
      this.strength = 'easy';
    }
  }

  getClass(index: number): string {
    if (this.password.length === 0) {
      return 'gray';
    }
    if (this.password.length < 8) {
      return 'red';
    }
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

