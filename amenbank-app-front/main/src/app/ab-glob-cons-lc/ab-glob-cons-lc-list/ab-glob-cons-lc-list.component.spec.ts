import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbGlobConsLcListComponent } from './ab-glob-cons-lc-list.component';

describe('AbGlobConsLcListComponent', () => {
  let component: AbGlobConsLcListComponent;
  let fixture: ComponentFixture<AbGlobConsLcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbGlobConsLcListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbGlobConsLcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
