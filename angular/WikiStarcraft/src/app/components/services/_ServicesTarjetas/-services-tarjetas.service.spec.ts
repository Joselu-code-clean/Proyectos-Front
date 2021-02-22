import { TestBed } from '@angular/core/testing';

import { ServicesTarjetasService } from './-services-tarjetas.service';

describe('ServicesTarjetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesTarjetasService = TestBed.get(ServicesTarjetasService);
    expect(service).toBeTruthy();
  });
});
