import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordCheckerComponent } from './password-checker.component';
import { PasswordStrengthService } from './password-strength.service';
import { PasswordInputComponent } from './password-input/password-input.component';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';

describe('PasswordCheckerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        PasswordCheckerComponent,
        PasswordInputComponent,
        StrengthIndicatorComponent
      ],
      providers: [PasswordStrengthService]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PasswordCheckerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    const fixture = TestBed.createComponent(PasswordCheckerComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.form).toBeDefined();
  });

  it('should update strength when password changes', () => {
    const fixture = TestBed.createComponent(PasswordCheckerComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const input = component.form.get('password');
    if (input) {
      input.setValue('password123!');
      expect(component.strength).toBe('strong');

      input.setValue('password');
      expect(component.strength).toBe('easy');

      input.setValue('pass1234');
      expect(component.strength).toBe('medium');
    } else {
      fail('Form control for password is not defined');
    }
  });
});
