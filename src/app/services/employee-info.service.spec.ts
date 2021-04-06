import { TestBed } from '@angular/core/testing';

import { EmployeeInfoService } from './employee-info.service';

describe('EmployeeInfoService', () => {
  let service: EmployeeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
