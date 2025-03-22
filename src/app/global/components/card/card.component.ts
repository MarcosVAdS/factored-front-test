import { Component, Input } from '@angular/core';
import { Film } from '../../../modules/films/models/film.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data: Film | undefined;
  @Input() type: string | undefined;
}
