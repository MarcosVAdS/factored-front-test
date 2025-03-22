import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { CardComponent } from '../../../global/components/card/card.component';

@Component({
  selector: 'app-characters-page',
  imports: [CardComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit{

  charactersList: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharactersList().subscribe({
      next: (response: any) => {
        this.charactersList = response.results;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }
}
