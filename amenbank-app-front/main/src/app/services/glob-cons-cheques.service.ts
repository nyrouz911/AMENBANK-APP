// src/app/services/glob-cons-cheques.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AB_GLOB_CONS_CHEQUES } from '../models/ab-glob-cons-cheques';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobConsChequesService {

  
  private apiUrl = `${environment.apiUrl}/amenbank/ab_glob_cons_cheques/list`;

  constructor(private http: HttpClient) { }

  getAB_GLOB_CONS_CHEQUES(): Observable<AB_GLOB_CONS_CHEQUES[]> {
    return this.http.get<AB_GLOB_CONS_CHEQUES[]>(this.apiUrl);
  }

  addAB_GLOB_CONS_CHEQUES(cheque: AB_GLOB_CONS_CHEQUES): Observable<AB_GLOB_CONS_CHEQUES> {
    return this.http.post<AB_GLOB_CONS_CHEQUES>(this.apiUrl, cheque);
  }

  deleteAB_GLOB_CONS_CHEQUES(cheque: AB_GLOB_CONS_CHEQUES): Observable<void> {
    // Construct the URL for the DELETE request, if necessary
    const deleteUrl = `${this.apiUrl}/${cheque.idChq}`;
    return this.http.delete<void>(deleteUrl);
  }
}
