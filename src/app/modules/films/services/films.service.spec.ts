import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { provideHttpClient } from '@angular/common/http';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(FilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
