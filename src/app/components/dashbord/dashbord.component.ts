import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  cartArray: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  cartbtn() {
    this.router.navigateByUrl('home/cart');
  }
  wishlist() {
    this.router.navigateByUrl('home/wishlist');
  }
  myOrders() {
    this.router.navigateByUrl('home/myorders');
  }
}
