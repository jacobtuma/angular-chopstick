import {Component} from '@angular/core';

import {MenuItem} from './models/menuitem.interface';

import {UpdateCartService} from '../services/updatecart.service';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItems: any[] = JSON.parse(localStorage.getItem('cart'));
  numInCart: number = this.cartItems.length;

  constructor(private updateCart: UpdateCartService) {
  }

  nav: Nav[] = [{
    link: '/',
    name: 'HOME',
    exact: true
  },
    {
      link: '/menu',
      name: 'MENU',
      exact: false
    },
    {
      link: '/cart',
      name: `CART`,
      exact: false
    }];

}
