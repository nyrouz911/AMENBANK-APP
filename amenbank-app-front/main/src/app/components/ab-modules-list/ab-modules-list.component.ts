import { Component, OnInit } from '@angular/core';
import { AbModulesService } from 'src/app/services/ab-modules.service';
import { AbModules } from 'src/app/models/ab-modules.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ab-modules-list',
  templateUrl: './ab-modules-list.component.html',
  styleUrls: ['./ab-modules-list.component.scss']
})
export class AbModulesListComponent implements OnInit {

  modules: AbModules[] = [];
  displayedColumns: string[] = ['code_module', 'lib', 'code_schema_db', 'fournisseur', 'tri', 'img_b64'];

  constructor(private abModulesService: AbModulesService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getModules();
  }

  getModules(): void {
    this.abModulesService.getAbModules().subscribe((data) => {
      this.modules = data;
    });
  }

  addModule(module: AbModules): void {
    this.abModulesService.addAbModules(module).subscribe(() => {
      this.getModules();
      this.cdRef.detectChanges();
    });
  }

  deleteModule(module: AbModules): void {
    this.abModulesService.deleteAbModules(module).subscribe(() => {
      this.getModules();
    });
  }
}
