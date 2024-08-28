import { TestBed } from '@angular/core/testing';

import { AbModulesService } from './ab-modules.service';

describe('AbModulesService', () => {
  let service: AbModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
