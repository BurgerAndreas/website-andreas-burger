import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';


export type RoutePlus = Route & {
  displayName?: string
}

@Component({
  selector: 'atom-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input() title!: string

  _routes_to_show: RoutePlus[] = [];
  @Input() set routes(val: RoutePlus[]) {
    this._routes_to_show = val.filter((route) => {return !!route.displayName});
  }

}
