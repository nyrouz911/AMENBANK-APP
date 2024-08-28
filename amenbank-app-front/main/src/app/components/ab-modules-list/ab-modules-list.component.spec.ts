import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbModulesListComponent } from './ab-modules-list.component';

describe('AbModulesListComponent', () => {
  let component: AbModulesListComponent;
  let fixture: ComponentFixture<AbModulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbModulesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
