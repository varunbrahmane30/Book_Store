import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/BookService/bookstore.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataservice/data.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss'],
})
export class GetallbooksComponent implements OnInit {
  books: any;
  pageBooks: any;
  bookscount: any;
  selectedValue: any;
  box: any;

  length: number;
  pageSize: number;
  pageIndex: number;

  constructor(
    private bookservice: BookstoreService,
    private _route: Router,
    private _dataservice: DataService
  ) {
    this.length = 200;
    this.pageIndex = 1;
    this.pageSize = 12;
  }

  public handlePage(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.books.slice(start, end);
    this.pageBooks = part;
  }

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
        this.length = this.bookscount;
        this.iterator();
      },
      (error: any) => console.log(error)
    );
  }

  displayselected(book: any) {
    this._route.navigateByUrl('/home/bookdetail');
    this._dataservice.changeMessage(book);

    console.log(book);
  }
}
