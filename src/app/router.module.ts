import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
        path: 'item/:nameCountry',
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
