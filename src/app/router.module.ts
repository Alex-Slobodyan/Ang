import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    children: [
      {
        path: '',
        loadChildren: './list/list.module#ListModule'
      },
      {
        path: 'item',
        loadChildren: './list-item/list-item.module#ListItemModule'
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterAppModule { }
