import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../global/services/base-api.service';
import { ApiResponse } from '../../../global/models/api-response.model';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseApiService<Character>{

  constructor(protected override http: HttpClient) {
    super(http, environment.starWarsApiUrl);
  }

  getCharactersList(page: string = ''): Observable<ApiResponse<Character[]>> { 
    return this.get(`/people/?page=${page}`, true) as Observable<ApiResponse<Character[]>>;
  }

  getCharacterDetails(id: number): Observable<Character> {
    return this.get(`/people/${id}`, false) as Observable<Character>;
  }
}
