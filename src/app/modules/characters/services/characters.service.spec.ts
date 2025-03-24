import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { provideHttpClient } from '@angular/common/http';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
