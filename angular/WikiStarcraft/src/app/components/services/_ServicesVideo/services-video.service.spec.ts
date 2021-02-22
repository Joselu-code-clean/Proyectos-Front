import { TestBed } from '@angular/core/testing';

import { ServicesVideoService } from './services-video.service';

describe('ServicesVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesVideoService = TestBed.get(ServicesVideoService);
    expect(service).toBeTruthy();
  });
});
