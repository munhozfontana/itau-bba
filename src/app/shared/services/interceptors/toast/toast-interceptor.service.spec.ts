import { TestBed } from '@angular/core/testing';

import { ToastInterceptorService } from './toast-interceptor.service';

describe('ToastInterceptorService', () => {
  let service: ToastInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
