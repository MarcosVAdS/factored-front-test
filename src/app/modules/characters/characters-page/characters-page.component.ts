import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { CardComponent } from '../../../global/components/card/card.component';
import { PaginatorComponent } from '../../../global/components/paginator/paginator.component';
import { FilterComponent } from '../../../global/components/filter/filter.component';
import { ApiResponse } from '../../../global/models/api-response.model';
import { Character } from '../models/character.model';


@Component({
  selector: 'app-characters-page',
  imports: [CardComponent, PaginatorComponent, FilterComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit{

  charactersResponse: ApiResponse<Character[]> = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };

  filteredCharactersResponse: ApiResponse<Character[]> = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: string = ''): void {
    this.charactersService.getCharactersList(page).subscribe({
      next: (response: ApiResponse<Character[]>) => {
        this.charactersResponse = response;
        this.filteredCharactersResponse = response;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }

  onSearch(search: string): void {
    if(search === '') {
      this.loadCharacters();
      return;
    }
    this.filteredCharactersResponse.results = this.charactersResponse.results.filter((item: Record<string, any>) =>
      Object.values(item).some((value: any) =>
      String(value).toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  onPageChange(page: number): void {
    this.loadCharacters(page.toString());
  }
}
