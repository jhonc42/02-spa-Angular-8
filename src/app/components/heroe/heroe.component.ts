import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activateRouted: ActivatedRoute, private _heroesService: HeroesService) {
  this.activateRouted.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
  });
}




}
