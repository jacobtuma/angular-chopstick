import {Component} from '@angular/core';

import {MenuItem} from './menuitem.model';
import {Cart} from './cart.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public cart = [];

  items: MenuItem[] = [
    {
      id: 11,
      name: 'California Roll',
      price: 8,
      category: 'sushi',
      description: 'Killer Cali Roll',
      ingredients: ['rice', 'avacodo', 'crab']
    },
    {
      id: 12,
      name: 'Shogun Roll',
      price: 2,
      category: 'sushi',
      description: 'Killer Shogun',
      ingredients: ['rice', 'avacodo', 'crab']
    },
  ];

  addToCart(item: MenuItem): void {
    this.cart.push(item);
  }

}
