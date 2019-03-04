import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReversePipe } from './countries.pipe';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent,
    ReversePipe,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListModule { }
