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

  constructor(
    private heroService: HeroService
    ) { }
    
    ngOnInit() {
      return this.getHeroes();
    }
    
    getHeroes(): void {
     
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
    }
}
