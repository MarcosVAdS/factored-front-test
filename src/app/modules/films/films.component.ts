import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-films',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class FilmsComponent {}
