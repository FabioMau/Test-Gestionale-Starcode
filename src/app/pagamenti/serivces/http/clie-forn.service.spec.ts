import { TestBed } from '@angular/core/testing';

import { ClieFornService } from './clie-forn.service';

describe('ClieFornService', () => {
  let service: ClieFornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClieFornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
