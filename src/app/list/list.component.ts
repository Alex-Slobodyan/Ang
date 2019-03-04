import { Component, OnInit } from '@angular/core';
import { CountryService } from '../_core/counttrys.service';

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
    this.countries = this.countrySrv.getCountries();
  }

  wtfEvent(event: string) {
    alert(event);
  }

}
