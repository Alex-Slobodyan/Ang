import { Component, OnInit } from '@angular/core';
import { CountryService } from '../_core/country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  countries: any[];
  ifCountry = 'Algeria';

  constructor(
    private countrySrv: CountryService
  ) { }

  ngOnInit() {
    // this.countrySrv.getCountries().subscribe((countries: any[]) => {
    //   this.countries = countries;
    // });
  }

  wtfEvent(event: string) {
    alert(event);
  }

}
