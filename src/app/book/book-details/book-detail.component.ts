import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent extends DialogComponent<Book, boolean> implements Book {

  id: number;
  author: string;
  title: string;
  date: Date;

  constructor(dialogService: DialogService, private bookService: BookService) {
    super(dialogService);
  }

  save() {
    this.bookService.saveBook(this);
    this.result = true;
    this.close();//TODO: save
  }
  cancel() {
    this.result = false;
    this.close();
  }
}