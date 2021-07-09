import { TestBed } from '@angular/core/testing';

import { LoadingServiceInterceptorService } from './loading-service-interceptor.service';

describe('LoadingServiceInterceptorService', () => {
  let service: LoadingServiceInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingServiceInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
