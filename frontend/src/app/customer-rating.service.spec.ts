import { TestBed } from '@angular/core/testing';

import { CustomerRatingService } from './customer-rating.service';

describe('CustomerRatingService', () => {
  let service: CustomerRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
