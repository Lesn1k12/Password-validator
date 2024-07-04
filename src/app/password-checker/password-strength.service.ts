import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
      return '';
    } else if ((hasLetters && hasNumbers && !hasSymbols) || 
               (hasLetters && hasSymbols && !hasNumbers) || 
               (hasNumbers && hasSymbols && !hasLetters)) {
      return 'medium';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'strong';
    } else {
      return 'easy';
    }
  }
}
