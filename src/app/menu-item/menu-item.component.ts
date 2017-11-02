import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {MenuItem} from '../models/menuitem.interface';

import {UpdateCartService} from '../../services/updatecart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  added = false;
  inCart = 0;

  @Input()
  item: MenuItem;

  @Output()
  select: EventEmitter<any> = new EventEmitter();

  @Output()
  decrement: EventEmitter<any> = new EventEmitter();

  constructor(private updateCart: UpdateCartService) {
  }

  ngOnInit() {
    this.amountInCart();
  }

  addToCart() {
    this.select.emit(this.item);
    this.added = true;
    this.inCart = this.updateCart.getAmountInCart(this.item)
  }

  amountInCart() {
    this.inCart = this.updateCart.getAmountInCart(this.item);
    if (this.inCart) {
      this.added = true;
    }
  }

  remove() {
    this.updateCart.removeItem(this.item);
    this.inCart--
    if (!this.inCart) {
      this.added = false;
    }
  }
}
