import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  constructor(private router: Router) {}

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
