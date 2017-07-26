/**
 * Created by feiyzhao on 7/11/17.
 */
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProblemlistComponent } from 'app/component/problemlist/problemlist.component'
import { ProblemdetailsComponent } from 'app/component/problemdetails/problemdetails.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
  },
  {
    path: 'problems',
    component: ProblemlistComponent
  },
  {
    path: 'problems/:id',
    component: ProblemdetailsComponent
  },
  {
    path: '**', 
    redirectTo: 'problems'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {};

export const routes = RouterModule.forRoot(appRoutes);

export const routableComponents = [ProblemlistComponent, ProblemdetailsComponent];

