import { TestBed } from '@angular/core/testing';

import { ServicesInfoService } from './-services-info.service';

describe('ServicesInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesInfoService = TestBed.get(ServicesInfoService);
    expect(service).toBeTruthy();
  });
});
