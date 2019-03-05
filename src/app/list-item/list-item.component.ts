import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryService } from '../_core/country.service';
import { switchMap } from 'rxjs/operators';

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
    this.subscription = this.route.params.pipe(
        switchMap(({ nameCountry }) => 
          this.countrySrv.getDataSource(nameCountry))
    )
    .subscribe(({item}) => {
      this.model = item;
    });
    
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
