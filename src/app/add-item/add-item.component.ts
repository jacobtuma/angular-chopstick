import {Component, OnInit} from '@angular/core';

import {MenuItem} from '../menuitem.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }

  ngOnInit() {
  }

  addItem(name: HTMLInputElement, price: HTMLInputElement, category: HTMLInputElement, description: HTMLInputElement, ingredients: HTMLInputElement): boolean {
    console.log(`Adding Article title: ${name.value}`);
    this.menuItems.push(new MenuItem(name.value, parseInt(price.value, 10), category.value, [ingredients.value], description.value));
    return false;
  }

}
