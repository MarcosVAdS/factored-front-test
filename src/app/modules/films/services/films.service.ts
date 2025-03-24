import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../global/services/base-api.service';
import { Film } from '../models/film.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../global/models/api-response.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FilmsService extends BaseApiService<Film> {
  constructor(protected override http: HttpClient) {
    super(http, environment.starWarsApiUrl);
  }

  getFilmsList(): Observable<ApiResponse<Film[]>> {
    return this.get('/films', true) as Observable<ApiResponse<Film[]>>;
  }

  getFilmDetails(id: number): Observable<Film> {
    return this.get(`/films/${id}`, false) as Observable<Film>;
  }
}
