/**
 * Created by pnaika on 4/19/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {IFoodInspection} from "../../model/foodInspection.model";

@Injectable()
export class FoodInspectionService {
  constructor(private http:Http){}

  getAllFoodInspectionData():Observable<IFoodInspection[]> {
    return this.http.get('https://data.cityofchicago.org/resource/cwig-ma7x.json')
      .map((response: Response) => {
      return <IFoodInspection[]>response.json();
    })
      .catch(this.handleError);
  }

  private handleError(error:Response) {
    return Observable.throw(error.status);
  }
}
