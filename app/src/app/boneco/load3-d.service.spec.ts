import { TestBed } from '@angular/core/testing';

import { Load3DService } from './load3-d.service';

describe('Load3DService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Load3DService = TestBed.get(Load3DService);
    expect(service).toBeTruthy();
  });
});
