import { TestBed } from '@angular/core/testing';

import { TransformDirService } from './transform-dir.service';

describe('TransformDirService', () => {
  let service: TransformDirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformDirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
