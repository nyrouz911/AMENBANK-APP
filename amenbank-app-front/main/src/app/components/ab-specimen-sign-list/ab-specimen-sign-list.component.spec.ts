import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbSpecimenSignListComponent } from './ab-specimen-sign-list.component';

describe('AbSpecimenSignListComponent', () => {
  let component: AbSpecimenSignListComponent;
  let fixture: ComponentFixture<AbSpecimenSignListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbSpecimenSignListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbSpecimenSignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
