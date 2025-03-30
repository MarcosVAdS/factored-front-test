import { Component, OnInit } from '@angular/core';
import { FilmsService } from './services/films.service';
import { Film } from './models/film.model';
import { ApiResponse } from '../../global/models/api-response.model';
import { CardComponent } from '../../global/components/card/card.component';
import { FilterComponent } from '../../global/components/filter/filter.component';

@Component({
  selector: 'app-films-page',
  imports: [CardComponent, FilterComponent],
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {
  filmsList: any;
  filteredFilmsList: any;
  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmsService.getFilmsList().subscribe({
      next: (response: ApiResponse<Film[]>) => {
        this.filmsList = response.results;
        this.filteredFilmsList = response.results;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  onSearch(search: string): void {
    console.log(search);
    if (search === '') {
      this.loadFilms();
      return;
    }
    this.filteredFilmsList = this.filmsList.filter(
      (item: Record<string, any>) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase()),
        ),
    );
  }
}
