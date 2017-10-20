import {MenuItem} from './menuitem.model';

export class Cart {
  items: any[];

  constructor(items: any[]) {
    this.items = items;
  }

  total(): number {
    let sum = 0;
    this.items.map( function(item) {
      sum += item.price;
    });
    return sum;
  }
}
