import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../global/services/base-api.service';
import { ApiResponse } from '../../../global/models/api-response.model';
import { Character } from '../models/character.model';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseApiService<Character> {
  private cache!: Observable<any>

  constructor(protected override http: HttpClient) {
    super(http, environment.starWarsApiUrl);
  }

  getCharactersList(page: string = ''): Observable<ApiResponse<Character[]>> {
    if (!this.cache) {
      this.cache = this.get(`/people/?page=${page}`, true).pipe(shareReplay(1))
    }
    return this.cache
  }

  getCharacterDetails(id: number): Observable<Character> {
    return this.get(`/people/${id}`, false) as Observable<Character>;
  }
}
