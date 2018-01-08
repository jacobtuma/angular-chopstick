import { Component, OnInit} from '@angular/core';

import { MenuItem} from '../models/menuitem.interface';

import {UpdateCartService} from '../../services/updatecart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: MenuItem[];
  total: number;

  constructor(private updateCart: UpdateCartService) {
  }

  ngOnInit() {
    this.cartItems = this.updateCart.getItems();
    this.total = this.getTotal();
  }

  removeItem(item: MenuItem) {
    this.updateCart.removeItem(item);
    this.total -= item.price;
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].price;
    }
    return total;
  }
  checkOut(): void {
    this.updateCart.emptyCart();
    this.updateCart.getItems();
    this.total = 0;
  }

}
