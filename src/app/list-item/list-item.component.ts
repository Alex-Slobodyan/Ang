import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountryService } from '../_core/counttrys.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {

  model: any;
  name: string;
  subscription: Subscription;

  constructor(
    private countrySrv: CountryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(({ nameCountry }) => {
      this.model = this.countrySrv.getCurrentCountryByName(nameCountry);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
