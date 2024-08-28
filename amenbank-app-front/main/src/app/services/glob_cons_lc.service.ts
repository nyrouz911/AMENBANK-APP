// src/app/services/glob-cons-LC.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AB_GLOB_CONS_LC } from '../models/ab_glob_cons_lc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobConsLcService {

  
  private apiUrl = `${environment.apiUrl}/amenbank/ab_glob_cons_lc/list`;

  constructor(private http: HttpClient) { }

  getAB_GLOB_CONS_LC(): Observable<AB_GLOB_CONS_LC[]> {
    return this.http.get<AB_GLOB_CONS_LC[]>(this.apiUrl);
  }

  addAB_GLOB_CONS_LC(lc: AB_GLOB_CONS_LC): Observable<AB_GLOB_CONS_LC> {
    return this.http.post<AB_GLOB_CONS_LC>(this.apiUrl, lc);
  }

  deleteAB_GLOB_CONS_LC(lc: AB_GLOB_CONS_LC): Observable<void> {
    // Construct the URL for the DELETE request, if necessary
    const deleteUrl = `${this.apiUrl}/${lc.idLdc}`;
    return this.http.delete<void>(deleteUrl);
  }
}
