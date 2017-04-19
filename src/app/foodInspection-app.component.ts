/**
 * Created by pnaika on 4/19/17.
 */
import { Component } from "@angular/core";

@Component({
  selector: 'food-inspection-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class FoodInspectionAppComponent {}
