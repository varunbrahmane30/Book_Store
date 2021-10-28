import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/BookService/bookstore.service';
import { AdminbookdetailsComponent } from '../adminbookdetails/adminbookdetails.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminaddnewbookComponent } from '../adminaddnewbook/adminaddnewbook.component';
@Component({
  selector: 'app-admingetallbooks',
  templateUrl: './admingetallbooks.component.html',
  styleUrls: ['./admingetallbooks.component.scss'],
})
export class AdmingetallbooksComponent implements OnInit {
  books: any;
  bookscount: any;

  constructor(
    private bookservice: BookstoreService,
    private dialog: MatDialog
  ) {}

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

  openDialog(book: any) {
    const dialogRef = this.dialog.open(AdminbookdetailsComponent, {
      width: '100%',
      height: 'fit-content',
      data: {
        element: book,
      },
    });
    console.log('opening-->', book);

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
      this.displaybooks();
    });
  }

  newbook() {
    const dialogRef = this.dialog.open(AdminaddnewbookComponent, {
      width: '100%',
      height: 'fit-content',
    });
    console.log('opening-->');

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
      this.displaybooks();
    });
  }
}
