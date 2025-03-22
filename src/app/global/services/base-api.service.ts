import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {

  constructor(protected http: HttpClient, private baseUrl: string) { }

  get(url: string, isPaginated: boolean): Observable<T | ApiResponse<T[]>> {
    if(isPaginated) {
      return this.http.get<ApiResponse<T[]>>(`${this.baseUrl}${url}`);
    }
    if(!isPaginated) {
      return this.http.get<T>(`${this.baseUrl}${url}`);
    }
    throw new Error('Unhandled case in get method');
  }
}
