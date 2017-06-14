import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-books></my-books>
  `
})

export class AppComponent
{
    title = 'List of books';
}