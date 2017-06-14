import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent }  from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-details/book-detail.component';
import { BookService } from './book/book.service';


@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
      {
        path: 'books',
        component: BookComponent
      },
    ]) ,
  BootstrapModalModule
   ],
  declarations: [ 
  AppComponent,
  BookComponent,
  BookDetailComponent
  ],
   providers: [
    BookService
  ],
    entryComponents: [
        BookDetailComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
