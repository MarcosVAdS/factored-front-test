import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)},
    { path: 'films', loadChildren: () => import('./modules/films/films.module').then( m => m.FilmsModule)},
    { path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then( m => m.CharactersModule)},
];
