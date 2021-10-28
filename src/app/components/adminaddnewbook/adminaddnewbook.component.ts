import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/service/adminservice/admin.service';

@Component({
  selector: 'app-adminaddnewbook',
  templateUrl: './adminaddnewbook.component.html',
  styleUrls: ['./adminaddnewbook.component.scss'],
})
export class AdminaddnewbookComponent implements OnInit {
  formdata: any;
  book: any;

  constructor(
    private adminservice: AdminService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<AdminaddnewbookComponent>
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      bookname: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      actualprice: new FormControl('', [Validators.required]),
      discountPrice: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
  }

  createbook() {
    let payload = {
      bookName: this.formdata.value.bookname,
      author: this.formdata.value.author,
      description: this.formdata.value.description,
      quantity: this.formdata.value.quantity,
      price: this.formdata.value.actualprice,
      discountPrice: this.formdata.value.discountPrice,
    };
    this.adminservice.adminnewbookservice(payload).subscribe(
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
