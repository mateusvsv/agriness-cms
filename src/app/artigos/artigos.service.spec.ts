import { TestBed } from '@angular/core/testing';

import { ArtigosService } from './artigos.service';

describe('ArtigosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtigosService = TestBed.get(ArtigosService);
    expect(service).toBeTruthy();
  });
});
