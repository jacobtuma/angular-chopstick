import {Component, OnInit} from '@angular/core';

import {Burrito} from '../models/burrito.interface';

import {UpdateCartService} from '../../services/updatecart.service';

@Component({
  selector: 'app-pokebowl-builder',
  templateUrl: './pokebowl-builder.component.html',
  styleUrls: ['./pokebowl-builder.component.scss']
})
export class PokebowlBuilderComponent implements OnInit {
  pokebowl: Burrito;
  submitted = false;

  constructor(private updateCart: UpdateCartService) {
    this.pokebowl = {
      name: 'Pokebowl',
      meat: null,
      fillings: {
        microgreens: false,
        asparagus: false,
        avocado: false,
        carrots: false,
        daikon: false,
        scallions: false,
        cucumber: false,
        greensprouts: false,
        springmix: false,
        redcabbage: false,
        creamcheese: false,
        panko: false,
        sesame: false
      },
      addons: {
        seaweedsalad: false,
        squidsalad: false
      },
      price: 0
    };
  }

  ngOnInit() {
  }

  checkAll() {

    this.pokebowl.fillings.microgreens = true;
    this.pokebowl.fillings.asparagus = true;
    this.pokebowl.fillings.avocado = true;
    this.pokebowl.fillings.carrots = true;
    this.pokebowl.fillings.daikon = true;
    this.pokebowl.fillings.scallions = true;
    this.pokebowl.fillings.cucumber = true;
    this.pokebowl.fillings.greensprouts = true;
    this.pokebowl.fillings.springmix = true;
    this.pokebowl.fillings.redcabbage = true;
    this.pokebowl.fillings.creamcheese = true;
    this.pokebowl.fillings.panko = true;
    this.pokebowl.fillings.sesame = true;

  }

  checkNone() {
    this.pokebowl.fillings.microgreens = false;
    this.pokebowl.fillings.asparagus = false;
    this.pokebowl.fillings.avocado = false;
    this.pokebowl.fillings.carrots = false;
    this.pokebowl.fillings.daikon = false;
    this.pokebowl.fillings.scallions = false;
    this.pokebowl.fillings.cucumber = false;
    this.pokebowl.fillings.greensprouts = false;
    this.pokebowl.fillings.springmix = false;
    this.pokebowl.fillings.redcabbage = false;
    this.pokebowl.fillings.creamcheese = false;
    this.pokebowl.fillings.panko = false;
    this.pokebowl.fillings.sesame = false;
  }

  handleSubmit(pokebowl: Burrito, isValid: boolean) {
    if (pokebowl.meat !== 'veggie') {
      pokebowl.price = 10;
      if (this.pokebowl.addons.squidsalad && this.pokebowl.addons.seaweedsalad) {
        pokebowl.price = 14;
      } else if (this.pokebowl.addons.squidsalad || this.pokebowl.addons.seaweedsalad) {
        pokebowl.price = 12;
      }
      console.log(pokebowl)
    } else {
      pokebowl.price = 8;
      if (this.pokebowl.addons.squidsalad && this.pokebowl.addons.seaweedsalad) {
        pokebowl.price = 12;
      } else if (this.pokebowl.addons.squidsalad || this.pokebowl.addons.seaweedsalad) {
        pokebowl.price = 10;
      }

    }
    pokebowl.name = pokebowl.meat + ' Pokebowl';
    this.updateCart.addItem(pokebowl);
    this.clearForm();
  }

  clearForm() {
    this.pokebowl.meat = '';
    this.checkNone();
    this.pokebowl.addons.seaweedsalad = false;
    this.pokebowl.addons.squidsalad = false;
    this.submitted = true;
    setTimeout(() => this.submitted = false, 2000);
  }


}
