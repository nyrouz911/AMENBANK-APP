import { TestBed } from '@angular/core/testing';

import { AbSpecimenSignService } from './ab-specimen-sign.service';

describe('AbSpecimenSignService', () => {
  let service: AbSpecimenSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbSpecimenSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
