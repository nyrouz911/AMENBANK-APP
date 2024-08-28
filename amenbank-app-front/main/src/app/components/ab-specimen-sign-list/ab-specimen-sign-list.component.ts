import { Component, OnInit } from '@angular/core';
import { AbSpecimenSignService } from 'src/app/services/ab-specimen-sign.service';
import { AbSpecimenSign } from 'src/app/models/ab-specimen-sign.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ab-specimen-sign-list',
  templateUrl: './ab-specimen-sign-list.component.html',
  styleUrls: ['./ab-specimen-sign-list.component.scss']
})
export class AbSpecimenSignListComponent implements OnInit {

  specimenSigns: AbSpecimenSign[] = [];
  displayedColumns: string[] = ['ribTire', 'specimenSign'];

  constructor(private abSpecimenSignService: AbSpecimenSignService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getSpecimenSigns();
  }

  getSpecimenSigns(): void {
    this.abSpecimenSignService.getAbSpecimenSign().subscribe((data) => {
      this.specimenSigns = data;
    });
  }

  addSpecimenSign(specimenSign: AbSpecimenSign): void {
    this.abSpecimenSignService.addAbSpecimenSign(specimenSign).subscribe(() => {
      this.getSpecimenSigns();
      this.cdRef.detectChanges();
    });
  }

  deleteSpecimenSign(specimenSign: AbSpecimenSign): void {
    this.abSpecimenSignService.deleteAbSpecimenSign(specimenSign).subscribe(() => {
      this.getSpecimenSigns();
    });
  }
}
