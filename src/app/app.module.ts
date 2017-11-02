import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ViewItemComponent } from './view-item/view-item.component';

import {TunnelService} from '../services/tunnelservice/tunnel.service';
import {UpdateCartService} from '../services/updatecart.service';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BurritoBuilderComponent } from './burrito-builder/burrito-builder.component';
import { PokebowlBuilderComponent } from './pokebowl-builder/pokebowl-builder.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'menu',
    component: MenuComponent,
  },
  { path: 'cart',
    component: CartComponent,
  },
  { path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    CartComponent,
    ViewItemComponent,
    MenuItemComponent,
    CarouselComponent,
    BurritoBuilderComponent,
    PokebowlBuilderComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule, HttpModule, CommonModule, FormsModule, RouterModule.forRoot(routes, {useHash: false}),
    NgbModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [TunnelService, UpdateCartService]
})
export class AppModule {
}
