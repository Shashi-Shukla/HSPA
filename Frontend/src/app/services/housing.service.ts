import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllPropertyDetails() : Observable<IProperty[]>{
    return this.http.get('data/propertyData.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];

        for( const id in data)
        {
          if(data.hasOwnProperty(id))
          {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
