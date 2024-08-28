import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import {RegisterRequest} from "src/app/models/register-request";
import {AuthenticationResponse} from "src/app/models/authentication-response";
import {VerificationRequest} from "src/app/models/verification-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
  //   form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   first_name: new FormControl('', [Validators.required]),
  //   last_name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // });
  // get f() {
  //   return this.form.controls;
  // }
  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['dashboard']);
          }, 3000);
        }
      });
  }
}



  //constructor(private authService: AuthenticationService, private router: Router) {}

  /*


  submit() {
    const user: User = {
      username: this.f.username.value!,
      first_name: this.f.first_name.value!,
      last_name: this.f.last_name.value!,
      password: this.f.password.value! 
    };
    
    this.authService.register(user).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
  */
