import { TestBed } from '@angular/core/testing';

import { TutorInterceptorService } from './tutor-interceptor.service';

describe('TutorInterceptorService', () => {
  let service: TutorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
