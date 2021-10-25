import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataservice/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent implements OnInit {
  data: any;
  ordercount = 0;
  addtobaghide: boolean = true;
  counthide: boolean = false;

  constructor(
    private route: Router,
    private dataservice: DataService,
    private cartservice: CartService,
    private _dataservice: DataService
  ) {}

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe((data: any) => {
      this.data = data;
    });
  }

  gotocart(data: any) {
    this.route.navigateByUrl('home/cart');
    this._dataservice.changeMessage(data);
  }

  gotowishlist(data: any) {
    this.route.navigateByUrl('home/wishlist');
    this._dataservice.changeMessage(data);
  }

  addtobagbuttonhide() {
    this.addtobaghide = false;
    this.counthide = true;
    this.cartservice.addcartitem(this.data._id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  updateCount() {
    let payload = {
      quantityToBuy: this.ordercount,
    };
    this.cartservice.updateitemcount(this.data._id, payload).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
