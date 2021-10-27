import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/BookService/bookstore.service';

@Component({
  selector: 'app-admingetallbooks',
  templateUrl: './admingetallbooks.component.html',
  styleUrls: ['./admingetallbooks.component.scss'],
})
export class AdmingetallbooksComponent implements OnInit {
  books: any;
  bookscount: any;

  constructor(private bookservice: BookstoreService) {}

  ngOnInit() {
    this.displaybooks();
  }

  displaybooks() {
    this.bookservice.getallbooks().subscribe(
      (response: any) => {
        console.log(response.result, response.result.length);
        this.books = response.result;
        this.bookscount = response.result.length;
      },
      (error: any) => console.log(error)
    );
  }
}
