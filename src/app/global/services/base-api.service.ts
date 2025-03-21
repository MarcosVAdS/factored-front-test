import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {

  constructor(protected http: HttpClient, private baseUrl: string) { }

  get(url: string): Observable<T[]> {
    console.log(this.baseUrl);
    return this.http.get<T[]>(`${this.baseUrl}${url}`);
  }

  create(url: string): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, {});
  }

  update(url: string): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}`, {});
  }

  delete(url: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${url}`);
  }
}
