import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobConsChequesListComponent } from './glob-cons-cheques-list.component';

describe('GlobConsChequesListComponent', () => {
  let component: GlobConsChequesListComponent;
  let fixture: ComponentFixture<GlobConsChequesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobConsChequesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobConsChequesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
