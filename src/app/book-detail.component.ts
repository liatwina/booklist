import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Book } from './book';
import { BookService } from './book.service';
@Component({
  selector: 'book-detail',
  template:`
         <div *ngIf="book">
      <h2>{{book.title}} details!</h2>
      <div><label>autuor: </label>{{book.autuor}}</div>
      <div><label>date: </label>{{book.date}}</div>
    </div>
  `
})
export class BookDetailComponent {
  
@Input() book: Book;
}