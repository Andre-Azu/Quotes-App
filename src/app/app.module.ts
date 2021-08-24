import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZamzComponent } from './zamz/zamz.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { UnderlineDirective } from './underline.directive';
// import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZamzComponent,
    QuotedetailComponent,
    QuoteFormComponent,
    UnderlineDirective,
    // DateCountPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
