import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePlus } from 'AtomsLib';
import { HomeComponent } from './home/home.component';

export const routes: RoutePlus[] = [
  {
    path: "",
    pathMatch: "full",
    title: "Andreas Burger - connect",
    displayName: "connect",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
