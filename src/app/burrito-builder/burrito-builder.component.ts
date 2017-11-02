import {Component, OnInit} from '@angular/core';

import {Burrito} from '../models/burrito.interface';

import {UpdateCartService} from '../../services/updatecart.service';

@Component({
  selector: 'app-burrito-builder',
  templateUrl: './burrito-builder.component.html',
  styleUrls: ['./burrito-builder.component.scss']
})
export class BurritoBuilderComponent implements OnInit {
  burrito: Burrito;
  submitted = false;
  dog  = [];

  constructor(private updateCart: UpdateCartService) {
    this.burrito = {
      name: 'Sushi Burrito',
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

    this.burrito.fillings.microgreens = true;
    this.burrito.fillings.asparagus = true;
    this.burrito.fillings.avocado = true;
    this.burrito.fillings.carrots = true;
    this.burrito.fillings.daikon = true;
    this.burrito.fillings.scallions = true;
    this.burrito.fillings.cucumber = true;
    this.burrito.fillings.greensprouts = true;
    this.burrito.fillings.springmix = true;
    this.burrito.fillings.redcabbage = true;
    this.burrito.fillings.creamcheese = true;
    this.burrito.fillings.panko = true;
    this.burrito.fillings.sesame = true;

  }

  checkNone() {
    this.burrito.fillings.microgreens = false;
    this.burrito.fillings.asparagus = false;
    this.burrito.fillings.avocado = false;
    this.burrito.fillings.carrots = false;
    this.burrito.fillings.daikon = false;
    this.burrito.fillings.scallions = false;
    this.burrito.fillings.cucumber = false;
    this.burrito.fillings.greensprouts = false;
    this.burrito.fillings.springmix = false;
    this.burrito.fillings.redcabbage = false;
    this.burrito.fillings.creamcheese = false;
    this.burrito.fillings.panko = false;
    this.burrito.fillings.sesame = false;
  }

  handleSubmit(burrito: Burrito, isValid: boolean) {
    if (burrito.meat !== 'veggie') {
      burrito.price = 10;
      if (this.burrito.addons.squidsalad && this.burrito.addons.seaweedsalad) {
        burrito.price = 14;
      } else if (this.burrito.addons.squidsalad || this.burrito.addons.seaweedsalad) {
        burrito.price = 12;
      }
      console.log(burrito);
    } else {
      burrito.price = 8;
      if (this.burrito.addons.squidsalad && this.burrito.addons.seaweedsalad) {
        burrito.price = 12;
      } else if (this.burrito.addons.squidsalad || this.burrito.addons.seaweedsalad) {
        burrito.price = 10;
      }

    }
    burrito.name = burrito.meat + ' Sushi Burrito';
    this.updateCart.addItem(burrito);
    this.clearForm();
  }

  clearForm() {
    this.burrito.meat = '';
    this.checkNone();
    this.burrito.addons.seaweedsalad = false;
    this.burrito.addons.squidsalad = false;
    this.submitted = true;
    setTimeout(() => this.submitted = false, 2000);
  }


}
