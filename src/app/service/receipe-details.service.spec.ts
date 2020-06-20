import { TestBed } from '@angular/core/testing';

import { ReceipeDetailsService } from './receipe-details.service';

describe('ReceipeDetailsService', () => {
  let service: ReceipeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
