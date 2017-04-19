import {Component, OnInit} from "@angular/core";
import {FoodInspectionService} from "../../components/foodInspectionService/foodInspectionService.service";
import * as _ from "lodash";

@Component({
  templateUrl: './foodInspection.component.html'
})
export class FoodInspectionComponent implements OnInit {
  foodInspections: any;

  constructor(private foodInspectionService: FoodInspectionService) {}
  ngOnInit() {
    this.foodInspectionService.getAllFoodInspectionData().subscribe(data => {
      this.foodInspections = _.map(data, function(res) {
        return  res;
      });
    });
  }
}
