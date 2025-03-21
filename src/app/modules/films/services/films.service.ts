import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../global/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseApiService<any>{

  constructor(protected override http: HttpClient) {
    super(http, 'https://swapi.dev/api/');
  }

  getFilmsList(): any {
    return this.get('/films');
  }
}
