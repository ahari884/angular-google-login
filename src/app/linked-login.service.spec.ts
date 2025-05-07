import { TestBed } from '@angular/core/testing';

import { LinkedLoginService } from './linked-login.service';

describe('LinkedLoginService', () => {
  let service: LinkedLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkedLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
