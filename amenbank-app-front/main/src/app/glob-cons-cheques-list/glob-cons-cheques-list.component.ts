import { Component, OnInit } from '@angular/core';
import { GlobConsChequesService } from '../services/glob-cons-cheques.service';
import { AB_GLOB_CONS_CHEQUES } from '../models/ab-glob-cons-cheques';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-glob-cons-cheques-list',
  templateUrl: './glob-cons-cheques-list.component.html',
  styleUrls: ['./glob-cons-cheques-list.component.scss']
})
export class GlobConsChequesListComponent implements OnInit {

  cheques: AB_GLOB_CONS_CHEQUES[] = [];
  displayedColumns: string[] = ['idChq','dateJournee', 'codeAgence','numLot','ribTire','nomTire','numCreance','dateEmission','montant']; // Add other column names here

  constructor(private chequeService: GlobConsChequesService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCheques();
  }
  
  getCheques(): void {
    this.chequeService.getAB_GLOB_CONS_CHEQUES().subscribe((data) => {
      console.log('Fetched cheques:', data); // Log the fetched data
      this.cheques = data;
    });
  }
  
  addCheque(cheque: AB_GLOB_CONS_CHEQUES): void {
    this.chequeService.addAB_GLOB_CONS_CHEQUES(cheque).subscribe(() => {
      this.getCheques();
      this.cdRef.detectChanges(); // Manually trigger change detection
    });
  }
  

  deleteCheque(cheque: AB_GLOB_CONS_CHEQUES): void {
    this.chequeService.deleteAB_GLOB_CONS_CHEQUES(cheque).subscribe(() => {
      this.getCheques(); // Refresh the list
    });
  }
}
