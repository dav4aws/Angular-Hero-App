import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman', avatar:'./assets/heroes_img/batman.jpg' },
      { id: 12, name: 'Superman', avatar:'./assets/heroes_img/superman.jpg' },
      { id: 13, name: 'Spider-Man', avatar:'./assets/heroes_img/spiderman.jpg' },
      { id: 14, name: 'RobotCop', avatar:'./assets/heroes_img/robocop.jpg' },
      { id: 15, name: 'Wonder Woman', avatar:'./assets/heroes_img/wonderW.jpg' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}