import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    InputTextModule, 
    PasswordModule, 
    ButtonModule,
    CardModule,
    FloatLabelModule,
    MessageModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  // Angular 22 Signals!
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    // Trigger loading signal
    this.isLoading.set(true);
    this.errorMessage.set(null);

    // Simulate an API call delay
    setTimeout(() => {
      this.isLoading.set(false);
      this.errorMessage.set('Invalid credentials. (API not hooked up yet!)');
      console.log('Form Submitted via Signal approach!', this.loginForm.value);
    }, 1500);
  }
}
