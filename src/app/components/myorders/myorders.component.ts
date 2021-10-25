import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss'],
})
export class MyordersComponent implements OnInit {
  orders: any;
  ordersCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      (res: any) => {
        this.orders = res.result;
        this.ordersCount = this.orders.length;
        console.log(this.orders);
      },
      (err) => console.log(err)
    );
  }
}
