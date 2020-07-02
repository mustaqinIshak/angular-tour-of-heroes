import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero }from '../hero'

import { from } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero= hero;
  }
  constructor(
    private heroService: HeroService
    ) { }
  
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }
  ngOnInit() {
    return this.getHeroes();
  }

}
