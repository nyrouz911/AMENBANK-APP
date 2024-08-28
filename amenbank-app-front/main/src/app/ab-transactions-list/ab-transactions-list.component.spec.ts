import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTransactionsListComponent } from './ab-transactions-list.component';

describe('AbTransactionsListComponent', () => {
  let component: AbTransactionsListComponent;
  let fixture: ComponentFixture<AbTransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbTransactionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
