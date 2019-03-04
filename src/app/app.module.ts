import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './_core/_core.module';
import { SharedModule } from './_shared/_shared.module';
import { RouterAppModule } from './router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterAppModule
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
