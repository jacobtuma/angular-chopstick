import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './home/home.component';

import { TunnelService} from '../services/tunnelservice/tunnel.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }];
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [TunnelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
