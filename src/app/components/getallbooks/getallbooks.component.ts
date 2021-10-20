import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/BookService/bookstore.service';
@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss'],
})
export class GetallbooksComponent implements OnInit {
  books: any;
  bookscount: any;
  selectedValue: any;
  box: any;
  constructor(private bookservice: BookstoreService) {}

  ngOnInit(): void {
    this.displaybooks();
    this.box = [
      { value: 'Sort by relevance' },
      { value: 'Sort by popularity' },
    ];
    this.selectedValue = this.box[0].value;
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
