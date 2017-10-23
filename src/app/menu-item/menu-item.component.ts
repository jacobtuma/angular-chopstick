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

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit(this.item);
  }
}
