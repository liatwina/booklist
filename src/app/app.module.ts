import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service'


@NgModule({
  imports: [ 
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
      {
        path: 'books',
        component: BookComponent
      },
    ]) 
   ],
  declarations: [ 
  AppComponent,
  BookDetailComponent,
  BookComponent 
  ],
   providers: [
    BookService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
