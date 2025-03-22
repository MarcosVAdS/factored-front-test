import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Film } from '../models/film.model';
import { ApiResponse } from '../../../global/models/api-response.model';

@Component({
  selector: 'app-films-page',
  imports: [],
  templateUrl: './films-page.component.html',
  styleUrl: './films-page.component.css'
})
export class FilmsPageComponent implements OnInit {

  constructor(private filmsService: FilmsService) { } 

  ngOnInit() {
    this.filmsService.getFilmsList().subscribe({
        next: (response: ApiResponse<Film[]> ) => {
          console.log(response.results);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    );

    this.filmsService.getFilmDetails(1).subscribe({
      next: (response: Film) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
