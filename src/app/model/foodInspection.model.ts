/**
 * Created by pnaika on 4/19/17.
 */
export interface IFoodInspection {
  address: string,
  aka_name: string,
  city: string,
  dba_name: string,
  facility_type: string,
  inspection_date: Date,
  inspection_id: number,
  inspection_type: string,
  latitude: number,
  license_: number,
  location?: {
    type: string,
    coordinates: any
  },
  longitude: string,
  results: string,
  risk: string,
  state: string
  violations:  string,
  zip: number
}
