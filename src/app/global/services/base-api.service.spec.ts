import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { BaseApiService } from './base-api.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response.model';

interface MockData {
  id: number;
  name: string;
}

class MockBaseApiService extends BaseApiService<MockData> {
  constructor(http: HttpClient) {
    super(http, '');
  }
}

describe('BaseApiService', () => {
  let service: BaseApiService<MockData>;
  let httpMock: HttpTestingController;
  let urlMock: string = '/api/mock';
  const mockItem: MockData = { id: 1, name: 'test' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: BaseApiService, useFactory: (http: HttpClient) => new MockBaseApiService(http), deps: [HttpClient] }
      ],
    });

    service = TestBed.inject(BaseApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a item', () => {
    service.get(urlMock, false).subscribe(item => {
      expect(item).toEqual(mockItem);
    });
    const req = httpMock.expectOne(urlMock);
    expect(req.request.method).toBe('GET');
    req.flush(mockItem);
    httpMock.verify();
  });

  it('should fetch a list of items', () => {
    const mockItems: ApiResponse<MockData[]> = {
      count: 2,
      next: null,
      previous: null,
      results: []
    };
    service.get(urlMock, true).subscribe(items => {
      expect(items).toEqual(mockItems);
    });
    const req = httpMock.expectOne(urlMock);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
    httpMock.verify();
  });
});
