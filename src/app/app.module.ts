import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZamzComponent } from './zamz/zamz.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ZamzComponent,
    QuotedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
