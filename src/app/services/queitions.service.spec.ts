import { TestBed } from '@angular/core/testing';

import { QueitionsService } from './queitions.service';

describe('QueitionsService', () => {
  let service: QueitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
