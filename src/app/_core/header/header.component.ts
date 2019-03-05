import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  model: string;
  name: string;
  subscription: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
