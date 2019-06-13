import { TestBed, inject } from '@angular/core/testing';

import { BancoConectionService } from './banco-conection.service';

describe('BancoConectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BancoConectionService = TestBed.get(BancoConectionService);
    expect(service).toBeTruthy();
  });
});
