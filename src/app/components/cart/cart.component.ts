import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookstoreService } from 'src/app/service/BookService/bookstore.service';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/dataservice/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  edituser!: FormGroup;
  cartitems: any;
  cartItemsCount: any;

  ordercount = 1;
  addtobaghide: boolean = true;
  counthide: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookservice: BookstoreService,
    private dataservice: DataService,
    private cartservice: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.edituser = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobileno: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      home: ['', Validators.required],
      work: ['', Validators.required],
      other: ['', Validators.required],
    });

    this.getCartItems();
    this.dataservice.currentMessage.subscribe((book: any) => {
      if (book) {
        this.cartservice.addcartitem(book._id).subscribe((data) => {
          this.getCartItems();
        });
      }
    });
  }

  onSubmitUser() {
    console.log(this.edituser.value);
  }

  gotobook() {
    this.router.navigateByUrl('home/books');
  }
  getCartItems() {
    this.cartservice.getCartItems().subscribe(
      (res: any) => {
        this.cartitems = res.result;
        this.cartItemsCount = this.cartitems.length;
        console.log(this.cartitems);
      },
      (err) => console.log(err)
    );
  }

  countincrease(book: any) {
    this.cartservice
      .updateitemcount(book._id, {
        quantityToBuy: book.quantityToBuy + 1,
      })
      .subscribe(
        (res: any) => {
          this.getCartItems();
        },
        (err) => console.log(err)
      );
  }

  countdecrease(book: any) {
    if (book.quantityToBuy > 1) {
      this.cartservice
        .updateitemcount(book._id, {
          quantityToBuy: book.quantityToBuy - 1,
        })
        .subscribe(
          (res: any) => {
            this.getCartItems();
          },
          (err) => console.log(err)
        );
    }
  }

  removecartitem(book: any) {
    this.cartservice.removecartitem(book._id).subscribe(
      (res: any) => {
        this.getCartItems();
      },
      (err) => console.log(err)
    );
  }

  checkout() {
    const itemsToBuy = this.cartitems.map((item: any) => ({
      product_id: item.product_id._id,
      product_name: item.product_id.bookName,
      product_quantity: item.quantityToBuy,
      product_price: item.product_id.discountPrice,
    }));

    this.cartservice.checkout(itemsToBuy).subscribe(
      (res: any) => {
        this.router.navigateByUrl('home/placeorder');
      },
      (err) => console.log(err)
    );
  }
}
