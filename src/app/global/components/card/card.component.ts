import { Component, Input } from '@angular/core';
import { Film } from '../../../modules/films/models/film.model';
import { Character } from '../../../modules/characters/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() data!: any;
  @Input() type: string | undefined;
}
