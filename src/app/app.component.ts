import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'superHero-UI';
  heroes: SuperHero[] = [];
  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((superHeroes: SuperHero[]) => {
        this.heroes = superHeroes;
      });
  }
}
