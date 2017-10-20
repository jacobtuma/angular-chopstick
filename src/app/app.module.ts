import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
