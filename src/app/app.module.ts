import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FormsModule } from '@angular/forms';
import {  Headers, Response } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from "./event.service";
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DetailComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EventListComponent},
      { path: 'detail/:eventId', component: DetailComponent},
    ]),
    
  ],
  providers: [HttpClientModule,HttpClient,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
