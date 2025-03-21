import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './films-page/films-page.component';

const routes: Routes = [{ path: '', component: FilmsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}