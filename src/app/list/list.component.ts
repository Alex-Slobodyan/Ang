import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../mock-countries';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  countries = COUNTRIES;
  ifCountry = 'Algeria'
  constructor() { }

  ngOnInit() {
  }

}
