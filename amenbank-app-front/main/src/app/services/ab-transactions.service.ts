import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbTransactions } from '../models/ab_transactions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbTransactionsService {

  private apiUrl = `${environment.apiUrl}/amenbank/ab_transactions/list`;

  constructor(private http: HttpClient) { }

  getAbTransactions(): Observable<AbTransactions[]> {
    return this.http.get<AbTransactions[]>(this.apiUrl);
  }

  addAbTransaction(transaction: AbTransactions): Observable<AbTransactions> {
    return this.http.post<AbTransactions>(this.apiUrl, transaction);
  }

  deleteAbTransaction(transaction: AbTransactions): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${transaction.code_transaction}`;
    return this.http.delete<void>(deleteUrl);
  }
}
