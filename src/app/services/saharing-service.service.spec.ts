import { TestBed } from '@angular/core/testing';

import { SahringServiceService } from './saharing-service.service';

describe('SaharingServiceService', () => {
  let service: SahringServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SahringServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
