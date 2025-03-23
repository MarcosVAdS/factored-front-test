import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { CardComponent } from '../../../global/components/card/card.component';
import { PaginatorComponent } from '../../../global/components/paginator/paginator.component';
import { ApiResponse } from '../../../global/models/api-response.model';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters-page',
  imports: [CardComponent, PaginatorComponent],
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

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: string = ''): void {
    this.charactersService.getCharactersList(page).subscribe({
      next: (response: ApiResponse<Character[]>) => {
        console.log(response);
        this.charactersResponse = response;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }

  onPageChange(page: number): void {
    console.log(page);
    this.loadCharacters(page.toString());
  }
}
