import { Component, OnInit, signal } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CardComponent } from '../../../../global/components/card/card.component';
import { PaginatorComponent } from '../../../../global/components/paginator/paginator.component';
import { FilterComponent } from '../../../../global/components/filter/filter.component';
import { ApiResponse } from '../../../../global/models/api-response.model';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../../../../global/components/skeleton/skeleton.component';

@Component({
  selector: 'app-characters-list',
  imports: [
    CardComponent,
    PaginatorComponent,
    FilterComponent,
    CommonModule,
    SkeletonComponent,
  ],
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  loading: boolean = true;

  charactersResponse = signal<ApiResponse<Character[]>>({
    count: 0,
    next: '',
    previous: '',
    results: [],
  });

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: string = ''): void {
    this.charactersService.getCharactersList(page).subscribe({
      next: (response: ApiResponse<Character[]>) => {
        this.charactersResponse.set(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSearch(search: string): void {
    console.log(search)
    if (search === '') {
      this.loadCharacters();
      return;
    }
    this.charactersResponse().results =
      this.charactersResponse().results.filter((item: Record<string, any>) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase()),
        ),
      );
  }

  onPageChange(page: number): void {
    this.loadCharacters(page.toString());
  }
}
