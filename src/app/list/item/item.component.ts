import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


interface Country {
  name: string;
  capital: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  ifCountry = 'Algeria';

  @Input()
  country: Country = {} as Country;

  @Output()
  wtfOutput: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
      console.log(this.country);
  }

  wtf(country: Country) {
      this.wtfOutput.emit(`${country.capital} of the ${country.name}`);
  }

}
