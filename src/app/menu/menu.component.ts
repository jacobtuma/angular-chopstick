import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {MenuItem} from '../models/menuitem.interface';

import {TunnelService} from '../../services/tunnelservice/tunnel.service';
import {UpdateCartService} from '../../services/updatecart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  cartItems: MenuItem[];

  @Output()
  cart: EventEmitter<any> = new EventEmitter();

  constructor(private tunnelService: TunnelService, private updateCart: UpdateCartService) {
  }

  ngOnInit() {
    this.tunnelService.getMenu()
      .subscribe((data: MenuItem[]) => this.menuItems = data);
  }

  addToCart(e) {
      // this.cart.emit(this.menuItems);
      this.updateCart.addItem(e);
  }

  decrement(e) {

  }

  getByCategory(category): MenuItem[] {
    if (this.menuItems) {
      return this.menuItems.filter((menuItem: MenuItem) => menuItem.category === category);
    }
  }


}
