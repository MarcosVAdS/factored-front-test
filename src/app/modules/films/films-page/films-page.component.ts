import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-films-page',
  imports: [],
  templateUrl: './films-page.component.html',
  styleUrl: './films-page.component.css'
})
export class FilmsPageComponent implements OnInit {

  constructor(private filmsService: FilmsService) { } 

  ngOnInit() {
    this.filmsService.getFilmsList().subscribe((response: any[]) => {
      console.log(response);
    });
  }
}
