import { TestBed } from '@angular/core/testing';

import { BigDataValidateService } from './big-data-api.service';

describe('BigDataApiService', () => {
  let service: BigDataValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigDataValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
