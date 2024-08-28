import { Component, OnInit } from '@angular/core';
import { AbTransactionsService } from '../services/ab-transactions.service';
import { AbTransactions } from '../models/ab_transactions';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ab-transactions-list',
  templateUrl: './ab-transactions-list.component.html',
  styleUrls: ['./ab-transactions-list.component.scss']
})
export class AbTransactionsListComponent implements OnInit {

  transactions: AbTransactions[] = [];
  displayedColumns: string[] = ['code_transaction', 'lib', 'tri']; // Ensure these match the columns defined in the template

  constructor(private abTransactionsService: AbTransactionsService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.abTransactionsService.getAbTransactions().subscribe((data) => {
      console.log('Fetched transactions:', data); // Log the fetched data
      this.transactions = data;
    });
  }

  addTransaction(transaction: AbTransactions): void {
    this.abTransactionsService.addAbTransaction(transaction).subscribe(() => {
      this.getTransactions();
      this.cdRef.detectChanges(); // Manually trigger change detection
    });
  }

  deleteTransaction(transaction: AbTransactions): void {
    this.abTransactionsService.deleteAbTransaction(transaction).subscribe(() => {
      this.getTransactions(); // Refresh the list
    });
  }
}
