import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Film } from '../models/film.model';
import { ApiResponse } from '../../../global/models/api-response.model';
import { CardComponent } from "../../../global/components/card/card.component";

@Component({
  selector: 'app-films-page',
  imports: [CardComponent],
  templateUrl: './films-page.component.html'
})
export class FilmsPageComponent implements OnInit {

  filmsList: any;
  constructor(private filmsService: FilmsService) { } 

  ngOnInit() {
    this.filmsService.getFilmsList().subscribe({
        next: (response: ApiResponse<Film[]>) => {
          this.filmsList = response.results;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    );

    /* this.filmsService.getFilmDetails(1).subscribe({
      next: (response: Film) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    }); */
  }
}
