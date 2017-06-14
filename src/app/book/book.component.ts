import { Component, OnInit  } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { DialogService } from "ng2-bootstrap-modal";
import {BookDetailComponent} from "./book-details/book-detail.component";

@Component({
  selector: 'my-books',
  template: `
      <h2>Books</h2>
      <ul class="books">
          <li *ngFor="let book of books"
              [class.selected]="book == selectedBook"
              (click)="onSelect(book)">
              <span class="badge">{{book.author}}</span>
              {{book.date}}
          </li>
      </ul>
  `,
})
export class BookComponent implements OnInit { 
  title = 'Books List';  
  books: Book[];
  selectedBook: Book;
  
   constructor(private dialogService:DialogService, private bookService: BookService) { }

getBooks(): void{
   this.bookService.getBooks().then(books =>this.books = books);
}

ngOnInit(): void {
    this.getBooks();
  }
  
    onSelect(book: Book): void {
  this.dialogService.addDialog(BookDetailComponent, book).subscribe((refresh) => {
      if (refresh) {
          this.getBooks();
      }
  });
} 
  }

