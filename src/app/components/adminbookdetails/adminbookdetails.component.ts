import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/service/adminservice/admin.service';
import { DataService } from 'src/app/service/dataservice/data.service';

@Component({
  selector: 'app-adminbookdetails',
  templateUrl: './adminbookdetails.component.html',
  styleUrls: ['./adminbookdetails.component.scss'],
})
export class AdminbookdetailsComponent implements OnInit {
  book: any;
  disabled: boolean = true;
  formdata: any;
  updatedclose: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminservice: AdminService,
    private snackbar: MatSnackBar,
    private datashare: DataService,
    private dialogRef: MatDialogRef<AdminbookdetailsComponent>
  ) {}

  ngOnInit(): void {
    this.book = this.data.element;

    this.formdata = new FormGroup({
      bookname: new FormControl(
        { value: this.book.bookName, disabled: this.disabled },
        [Validators.required]
      ),
      author: new FormControl(
        { value: this.book.author, disabled: this.disabled },
        [Validators.required]
      ),
      description: new FormControl(
        { value: this.book.description, disabled: this.disabled },
        [Validators.required]
      ),
      actualprice: new FormControl(
        { value: this.book.price, disabled: this.disabled },
        [Validators.required]
      ),
      discountPrice: new FormControl({
        value: this.book.discountPrice,
        disabled: this.disabled,
      }),
      quantity: new FormControl(
        { value: this.book.quantity, disabled: this.disabled },
        [Validators.required]
      ),
    });
  }

  show() {
    this.disabled = false;
    this.ngOnInit();
  }

  updatedata() {
    let payload = {
      bookName: this.formdata.value.bookname,
      author: this.formdata.value.author,
      description: this.formdata.value.description,
      quantity: this.formdata.value.quantity,
      price: this.formdata.value.actualprice,
      discountPrice: this.formdata.value.discountPrice,
    };
    this.adminservice.adminupdatebookservice(payload, this.book._id).subscribe(
      (response: any) => {
        console.log(response);

        this.snackbar.open(response.message, 'close', {
          duration: 1500,
        });
        this.dialogRef.close();
      },
      (error: any) => console.log(error)
    );
  }

  deletebook() {
    this.adminservice.admindeletebookservice(this.book._id).subscribe(
      (response: any) => {
        console.log(response);

        this.snackbar.open(response.message, 'close', {
          duration: 1500,
        });
        this.dialogRef.close();
      },
      (error: any) => console.log(error)
    );
  }
}
