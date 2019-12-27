import { MartingaleModule } from './martingale/martingale.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MartingaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
