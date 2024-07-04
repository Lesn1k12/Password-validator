import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from './password-input/password-input.component';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordInputComponent, StrengthIndicatorComponent],
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  form: FormGroup;
  private _strength: string = '';

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.form = this.fb.group({
      password: ['']
    });

    this.form.get('password')?.valueChanges.subscribe(value => {
      this._strength = this.passwordStrengthService.checkPasswordStrength(value);
    });
  }

  get strength(): string {
    return this.passwordStrengthService.checkPasswordStrength(this.form.get('password')?.value || '');
  }
}

