import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { IError } from '../../../services/errors.service';
enum FormControlNames {
  Username = 'username',
  Password = 'password',
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatLabel,
    MatError,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    [FormControlNames.Username]: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    [FormControlNames.Password]: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  FormControlNames = FormControlNames;
  errors = {
    email: '',
    password: '',
    apiError: '',
  };
  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.login(
        this.loginForm.value.username ?? '',
        this.loginForm.value.password ?? ''
      );
    } else {
      this.validateUsername();
      this.validatePassword();
    }
  }
  validateUsername() {
    if (this.loginForm.get(FormControlNames.Username)?.hasError('required')) {
      this.errors.email = 'Username is required';
    } else if (
      this.loginForm.get(FormControlNames.Username)?.hasError('minlength')
    ) {
      this.errors.email = 'Username must be at least 6 characters';
    } else {
      this.errors.email = '';
    }
  }

  validatePassword() {
    if (this.loginForm.get(FormControlNames.Password)?.hasError('required')) {
      this.errors.password = 'Password is required';
    } else if (
      this.loginForm.get(FormControlNames.Password)?.hasError('minlength')
    ) {
      this.errors.password = 'Password must be at least 6 characters';
    } else {
      this.errors.password = '';
    }
  }

  login(userName:string, password:string) {
    this.authService.login(userName, password).subscribe(
      {
        next: (res) => {

        },
        error: (err:IError) => {
          this.errors.apiError = err.ErrorMessage;
        },
      }
    );
  }
}
