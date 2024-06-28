import { Component } from '@angular/core';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordCheckerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-strength-checker';
}