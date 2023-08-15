import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = 'Spider-man';
    hero.firstName = "Peter Parker";
    hero.place = "New York City";
    return [hero];
  }
}
