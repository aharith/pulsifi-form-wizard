import { TestBed } from '@angular/core/testing';

import { BdEmailValidatorService } from './bd-email-validator.service';

describe('BdEmailValidatorService', () => {
  let service: BdEmailValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdEmailValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
