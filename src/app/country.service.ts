import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';



@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private baseURl = "http://localhost:8080/country/all"

  constructor(private httpclient: HttpClient) { }

  getCountrylist(): Observable<Country[]>{
    return this.httpclient.get<Country[]>('${this.baseURl}');
  }
}
