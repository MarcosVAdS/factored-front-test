import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'films',
    loadComponent: () => import('./modules/films/films.component').then((c) => c.FilmsComponent),
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.routes').then((r) => r.routes)
  },
];
