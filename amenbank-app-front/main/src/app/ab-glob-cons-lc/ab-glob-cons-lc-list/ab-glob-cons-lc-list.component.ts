import { Component, OnInit } from '@angular/core';
import { GlobConsLcService } from 'src/app/services/glob_cons_lc.service';
import { AB_GLOB_CONS_LC } from 'src/app/models/ab_glob_cons_lc';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ab-glob-cons-lc-list',
  templateUrl: './ab-glob-cons-lc-list.component.html',
  styleUrls: ['./ab-glob-cons-lc-list.component.scss']
})
export class AbGlobConsLcListComponent implements OnInit {

  lcRecords: AB_GLOB_CONS_LC[] = [];
  displayedColumns: string[] = ['idLdc', 'dateJournee', 'codeAgence', 'numLot', 'numLigne', 'montant']; // Add other column names as needed

  constructor(private lcService: GlobConsLcService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getLcRecords();
  }

  getLcRecords(): void {
    this.lcService.getAB_GLOB_CONS_LC().subscribe((data) => {
      console.log('Fetched LC records:', data); // Log the fetched data
      this.lcRecords = data;
    });
  }

  addLcRecord(lc: AB_GLOB_CONS_LC): void {
    this.lcService.addAB_GLOB_CONS_LC(lc).subscribe(() => {
      this.getLcRecords();
      this.cdRef.detectChanges(); // Manually trigger change detection
    });
  }

  deleteLcRecord(lc: AB_GLOB_CONS_LC): void {
    this.lcService.deleteAB_GLOB_CONS_LC(lc).subscribe(() => {
      this.getLcRecords(); // Refresh the list
    });
  }
}
