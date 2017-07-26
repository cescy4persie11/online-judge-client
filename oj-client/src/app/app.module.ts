import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule, routableComponents, routes } from './app.routing'

// Services
import { ProblemdetailsService } from './services/problemdetails.service';
import { AuthService } from './services/auth.service';
import { CollaborationService } from './services/collaboration.service';
// Components
import { EditorComponent } from './component/editor/editor.component';
import { ProblemlistComponent } from './component/problemlist/problemlist.component';
import { ProblemdetailsComponent } from './component/problemdetails/problemdetails.component';
import { NewproblemComponent } from './component/newproblem/newproblem.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemlistComponent,
    ProblemdetailsComponent,
    NewproblemComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
		routes
  ],
  providers: [
    CollaborationService,
    ProblemdetailsService,
    AuthService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
