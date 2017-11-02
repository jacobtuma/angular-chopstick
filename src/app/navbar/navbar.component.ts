import { Component, OnInit, Input } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {MenuItem} from '../menuitem.model';

import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  entryComponents: [
      CartComponent
  ]
})
export class NavbarComponent implements OnInit {
  @Input() cart: MenuItem[];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.name = 'World';
  }

}
