import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../../modules/films/models/film.model';
import { Character } from '../../../modules/characters/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
})
export class CardComponent implements OnInit {
  @Input() data!: any;
  @Input() type: string | undefined;

  ngOnInit(): void {
    console.log(this.data)
  }
}
