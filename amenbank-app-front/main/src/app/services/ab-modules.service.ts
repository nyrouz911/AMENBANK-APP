import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbModules } from '../models/ab-modules.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AbModulesService {

  private apiUrl = `${environment.apiUrl}/amenbank/ab_modules/list`;

  constructor(private http: HttpClient) { }

  getAbModules(): Observable<AbModules[]> {
    return this.http.get<AbModules[]>(this.apiUrl);
  }

  addAbModules(module: AbModules): Observable<AbModules> {
    return this.http.post<AbModules>(this.apiUrl, module);
  }

  deleteAbModules(module: AbModules): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${module}`);
  }
}
