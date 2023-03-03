import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AtomsLibModule as MainAtomsLib } from 'nhl97-atoms-lib';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    MainAtomsLib
  ],
  exports: [
    NavBarComponent
  ]
})
export class AtomsLibModule { }
