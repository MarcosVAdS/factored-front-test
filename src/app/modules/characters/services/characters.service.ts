import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../global/services/base-api.service';
import { ApiResponse } from '../../../global/models/api-response.model';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseApiService<Character>{

  constructor(protected override http: HttpClient) {
    super(http, 'https://swapi.dev/api/');
  }

  getCharactersList(): Observable<ApiResponse<Character[]>> { 
    return this.get('/people', true) as Observable<ApiResponse<Character[]>>;
  }

  getCharacterDetails(id: number): Observable<Character> {
    return this.get(`/people/${id}`, false) as Observable<Character>;
  }
}
