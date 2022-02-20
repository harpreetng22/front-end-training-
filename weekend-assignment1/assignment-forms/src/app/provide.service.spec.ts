import { TestBed } from '@angular/core/testing';

import { ProvideService } from './provide.service';

describe('ProvideService', () => {
  let service: ProvideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
