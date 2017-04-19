import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FoodInspectionComponent } from "./feature/foodInspection/foodInspection.component";
import {FoodInspectionService} from "./components/foodInspectionService/foodInspectionService.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {FoodInspectionAppComponent} from "./foodInspection-app.component";
import {Error404Component} from "./components/error/404.component";
import {NavBarComponent} from "./components/nav-bar/navbar.component";

@NgModule({
  declarations: [
    FoodInspectionAppComponent,
    Error404Component,
    FoodInspectionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FoodInspectionService],
  bootstrap: [FoodInspectionAppComponent]
})
export class AppModule { }
