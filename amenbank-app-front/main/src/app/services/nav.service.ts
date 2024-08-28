import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AB_GLOB_CONS_CHEQUES } from 'src/app/models/ab-glob-cons-cheques';
@Injectable({ providedIn: 'root' })
export class NavService {
  public currentUrl = new BehaviorSubject<any>(undefined);
  private apiUrl = `${environment.apiUrl}/amenbank`; // Define the base URL for your API

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  // Example method to add an AB_GLOB_CONS_CHEQUES
  addAB_GLOB_CONS_CHEQUES(data: AB_GLOB_CONS_CHEQUES): Observable<AB_GLOB_CONS_CHEQUES> {
    return this.http.post<AB_GLOB_CONS_CHEQUES>(`${this.apiUrl}/ab_glob_cons_cheques`, data);
  }

  // Example method to delete an AB_GLOB_CONS_CHEQUES
  deleteAB_GLOB_CONS_CHEQUES(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ab_glob_cons_cheques/${id}`);
  }

  // Example method to list all AB_GLOB_CONS_CHEQUES
  listAB_GLOB_CONS_CHEQUES(): Observable<AB_GLOB_CONS_CHEQUES[]> {
    return this.http.get<AB_GLOB_CONS_CHEQUES[]>(`${this.apiUrl}/ab_glob_cons_cheques/list`);
  }
}
