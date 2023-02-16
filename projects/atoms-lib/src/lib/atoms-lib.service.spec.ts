import { TestBed } from '@angular/core/testing';

import { AtomsLibService } from './atoms-lib.service';

describe('AtomsLibService', () => {
  let service: AtomsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
