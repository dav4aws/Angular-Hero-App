import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  heroes : Hero[];

  constructor(
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string, avatar : string): void { 
    name = name.trim();
    if (!name) { return; }
    if (!avatar) { return; }
    this.heroService.addHero({ name, avatar } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
