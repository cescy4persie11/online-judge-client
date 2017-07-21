import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { AppRoutingModule, routableComponents, routes } from './app.routing'


import { ProblemlistComponent } from './component/problemlist/problemlist.component';
import { ProblemlistService } from './services/problemlist.service';
import { ProblemdetailsService } from './services/problemdetails.service';
import { ProblemdetailsComponent } from './component/problemdetails/problemdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemlistComponent,
    ProblemdetailsComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		routes
  ],
  providers: [
		ProblemlistService, 
		ProblemdetailsService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
