import { TestBed } from '@angular/core/testing';

import { BdPhoneValidatorService } from './bd-phone-validator.service';

describe('BdPhoneValidatorService', () => {
  let service: BdPhoneValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdPhoneValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
