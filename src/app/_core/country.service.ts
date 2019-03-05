import { Injectable, OnInit } from '@angular/core';
import { COUNTRIES } from '../mock-countries';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const ROOT_URL = 'https://restcountries.eu/rest/v2';

@Injectable()
export class CountryService implements OnInit {
  
  private country = COUNTRIES;
  current: any;


  constructor(
    private http: HttpClient
  ) { }


  ngOnInit() {
  }

  getDataSource(name: string = '') {
    return combineLatest(
      this.http.get(ROOT_URL),
      this.http.get(ROOT_URL + '/name/' + name)
    ).pipe(
      map(([list, item]) => ({list, item}))
    )
  }

  getCountries() {
    return this.http.get(ROOT_URL);
  }

  getCurrentCountryByName(name: string) {
    return this.http.get(ROOT_URL + '/name/' + name);
  }

}
