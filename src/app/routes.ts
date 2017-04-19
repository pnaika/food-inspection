import {Routes} from "@angular/router";
import {FoodInspectionComponent} from "./feature/foodInspection/foodInspection.component";
import {Error404Component} from "./components/error/404.component";
/**
 * Created by pnaika on 4/19/17.
 */


export const appRoutes:Routes = [
  { path: 'foodInspection', component: FoodInspectionComponent},
  { path: '404', component : Error404Component},
  { path: '', redirectTo: '/foodInspection', pathMatch: 'full'}
]
