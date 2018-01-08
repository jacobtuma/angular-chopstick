import {Injectable} from '@angular/core';

import {MenuItem} from '../app/models/menuitem.interface';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateCartService {
  cartItems: any[] = [];

  constructor() {
  }

  getItems(): MenuItem[] {
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
    return this.cartItems;
  }
  getAmountInCart(e: MenuItem): number {
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
   return this.cartItems.filter((cartItem: MenuItem) => cartItem._id === e._id).length;
  }

  addItem(e) {
    this.cartItems.push(e);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeItem(e: MenuItem) {
    this.cartItems.splice(this.cartItems.indexOf(e), 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  emptyCart() {
    this.cartItems.length = 0;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

}
