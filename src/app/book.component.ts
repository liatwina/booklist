import { Component, OnInit  } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-books',
  template: `
            <h2>Books</h2>
            <ul class="books">
              <li *ngFor="let book of books" 
              [class.selected]="book == selectedBook"
              (click)="onSelect(book)">
               <span class="badge">{{book.autuor}}</span>
               {{book.date}}
              </li>
            </ul>
            <book-detail [book]="selectedBook"></book-detail>
            `,
})
export class BookComponent implements OnInit { 
  title = 'Books List';  
  books: Book[];
  selectedBook: Book;
  
   constructor(private bookService: BookService) { }

getBooks(): void{
   this.bookService.getBooks().then(books =>this.books = books);
}

ngOnInit(): void {
    this.getBooks();
  }
  
    onSelect(book: Book): void {
  this.selectedBook = book;
} 
  }

