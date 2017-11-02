import {Component, OnInit} from '@angular/core';

import {TunnelService} from '../../services/tunnelservice/tunnel.service';


import {MenuItem} from '../menuitem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
  cartItems: MenuItem[];

  constructor(private tunnelservice: TunnelService) {
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {

    this.menuItems = [];
    this.cartItems = [];
    this.tunnelservice.getMenu().subscribe(
      res => {
        res.forEach(item => {
          this.menuItems.push(item);
        });
      },
      err => {
        console.error(err);
      }
    );
  }

  decrement(e: MenuItem) {
  this.cartItems.splice(this.cartItems.indexOf(e), 1);

  }

  addToCart(e: MenuItem) {
    this.cartItems.push(e);
  }

  getByCategory(category): MenuItem[] {
    return this.menuItems.filter((menuItem: MenuItem) => menuItem.category === category);
  }

}
