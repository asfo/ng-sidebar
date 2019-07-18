import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolaComponent } from './hola.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'hola', pathMatch: 'full', component: HolaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
