import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbSpecimenSign } from 'src/app/models/ab-specimen-sign.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbSpecimenSignService {

  private apiUrl = `${environment.apiUrl}/amenbank/ab_specimen_sign/list`;

  constructor(private http: HttpClient) { }  

  getAbSpecimenSign(): Observable<AbSpecimenSign[]> {
    return this.http.get<AbSpecimenSign[]>(this.apiUrl);
  }

  addAbSpecimenSign(specimenSign: AbSpecimenSign): Observable<AbSpecimenSign> {
    return this.http.post<AbSpecimenSign>(this.apiUrl, specimenSign);
  }

  deleteAbSpecimenSign(specimenSign: AbSpecimenSign): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${specimenSign}`);
  }
}
