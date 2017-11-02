import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MenuItem} from '../menuitem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  item: MenuItem;

  @Output()
  select: EventEmitter<any> = new EventEmitter();

  @Output()
  decrement: EventEmitter<any> = new EventEmitter();

  amountSelected: number;

  constructor() {
    this.amountSelected = 0;
  }

  ngOnInit() {
  }

  decrementCart() {
    if (this.amountSelected) {
      this.amountSelected--;
      this.decrement.emit(this.item);
    }
  }

  onSelect() {
    this.select.emit(this.item);
    this.amountSelected++;
  }
}
