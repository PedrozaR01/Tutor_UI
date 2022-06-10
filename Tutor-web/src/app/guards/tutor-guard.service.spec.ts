import { TestBed } from '@angular/core/testing';

import { TutorGuardService } from './tutor-guard.service';

describe('TutorGuardService', () => {
  let service: TutorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
