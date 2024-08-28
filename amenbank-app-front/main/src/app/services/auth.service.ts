import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../models/register-request";
import {AuthenticationResponse} from "../models/authentication-response";
import {VerificationRequest} from "../models/verification-request";
import {AuthenticationRequest} from "../models/authentication-request";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8089/app/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  register(
    registerRequest: RegisterRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }
}


















// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from '../models/user.model';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   private apiUrl = `${environment.apiUrl}/amenbank/user`;

//   constructor(private http: HttpClient) { }

//  register(user: User): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/register`, user);
//   }

//   login(user: User): Observable<User> {
//     return this.http.post<User>(`${this.apiUrl}/login`, user);
//   }
// }
