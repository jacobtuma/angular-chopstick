import {Component, OnInit} from '@angular/core';


import {MenuItem} from '../menuitem.model';

import {TunnelService} from '../../services/tunnelservice/tunnel.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private tunnelservice: TunnelService) {
    this.menuItems = [];
  }

  ngOnInit() {
    this.getMenu();
  }

  addItem(name: HTMLInputElement, price: HTMLInputElement, category: HTMLInputElement, description: HTMLInputElement, ingredients: HTMLInputElement): boolean {
    console.log(`Adding Article title: ${name.value}`);
    let newEntry = new MenuItem(name.value, parseInt(price.value, 10), category.value, [ingredients.value], description.value);
    this.tunnelservice.itemPost(newEntry);
    return false;
  }

  getMenu() {

    this.tunnelservice.getMenu().subscribe(
      res => {
        this.menuItems.push(res);
        res.forEach(item => {
          this.menuItems.push(item);
        });
        console.log(this.menuItems);
      },
      err => {
        console.error(err);
      }
    );
  }

}
