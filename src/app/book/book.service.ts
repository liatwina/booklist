import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

    static booksData: Book[] = [
        { id: 1, author: 'JOAN DIDION', date: new Date("February 4, 2016 10:13:00"), title: 'title1' },
        { id: 2, author: 'JOAN DIDION', date: new Date("February 4, 2016 10:13:00"), title: 'title2' },
        { id: 3, author: 'JOAN DIDION', date: new Date("February 4, 2016 10:13:00"), title: 'title3' }
    ];

    getBooks(): Promise<Book[]> {
        return Promise.resolve(BookService.booksData);
    }

    saveBook(book: Book): boolean {
        let index = -1;
        for (let b = 0; b < BookService.booksData.length; b++) {
            if (BookService.booksData[b].id == book.id) {
                index = b;
                break;
            }
        }

        if (index >= 0) {
            BookService.booksData[index] = {
                title: book.title,
                author: book.author,
                date: book.date,
                id: book.id
            }
            return true;
        }

        return false;
    }
}