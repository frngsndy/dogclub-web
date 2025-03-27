import { TestBed } from '@angular/core/testing';

import { Report1Service } from '../services/services.service';

describe('Report1Service', () => {
  let service: Report1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Report1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
