import { Injectable } from '@angular/core';
import { CoreModule } from './_core.module';
import { COUNTRIES } from '../mock-countries';

@Injectable({
  providedIn: CoreModule
})
export class CountryService {

  private country = COUNTRIES;
  current: any;


  constructor() { }

  getCountries() {
    return [...this.country];
  }

  getCurrentCountryByName(name: string) {
    return this.country.find((item) => item.name === name);
  }

}
