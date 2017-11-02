import {Injectable} from '@angular/core';

import {MenuItem} from '../app/models/menuitem.interface';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateCartService {
  cartItems: any[] = [{
    category:
      'Basic Roll',
    description:
      'Yellowtail, scallions, cucumber, mayo',
    ingredients:
      [''],
    name:
      'Yellowtail Roll',
    price:
      7,
    _id: '59ed1108f37d99acc26ad481'
  },
    {
      category:
        'Basic Roll',
      description:
        'Yellowtail, scallions, cucumber, mayo',
      ingredients:
        [''],
      name:
        'Yellowtail Roll',
      price:
        10,
      _id: '59ed1108f37d99acc26ad481'
    }
  ];

  constructor() {
  }

  getItems(): MenuItem[] {
    return this.cartItems;
  }
  getAmountInCart(e: MenuItem): number {
   return this.cartItems.filter((cartItem: MenuItem) => cartItem._id === e._id).length;
  }

  addItem(e) {
    this.cartItems.push(e);
    console.log(this.cartItems);
  }

  removeItem(e: MenuItem) {
    this.cartItems.splice(this.cartItems.indexOf(e), 1);
  }

}
