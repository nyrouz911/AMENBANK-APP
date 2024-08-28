import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service'; // Assuming you have an AuthService
import { User } from 'src/app/models/user.model';  // Use the new interface
import {AuthenticationRequest} from "src/app/models/authentication-request";
import {AuthenticationResponse} from "src/app/models/authentication-response";
import {VerificationRequest} from "src/app/models/verification-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class AppSideLoginComponent {
  authRequest: AuthenticationRequest = {};
  
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
 
 /* form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
*/
  //constructor(private authService: AuthenticationService, private router: Router) {}

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['dashboard']);
          }
        }
      });
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['dashboard']);
        }
      });
  }
}


/*
  get f() {
    return this.form.controls;
  }

  submit() {
    const user: User = {
      username: this.f.username.value || '',  // Provide fallback value
      password: this.f.password.value || ''   // Provide fallback value
    };

    this.authService.login(user).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
  */