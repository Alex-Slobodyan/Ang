import { TestBed } from '@angular/core/testing';

import { CounttrysService } from './counttrys.service';

describe('CounttrysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounttrysService = TestBed.get(CounttrysService);
    expect(service).toBeTruthy();
  });
});
