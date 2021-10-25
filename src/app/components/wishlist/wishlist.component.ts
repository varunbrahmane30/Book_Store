import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataservice/data.service';
import { WishlistService } from 'src/app/service/WishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist: any;
  wishlistCount: number = 0;

  constructor(
    private dataservice: DataService,
    private wishListService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getWishlist();
    this.dataservice.currentMessage.subscribe((book: any) => {
      if (book) {
        this.wishListService.addItem(book._id).subscribe((data) => {
          this.getWishlist();
        });
      }
    });
  }

  getWishlist() {
    this.wishListService.getItems().subscribe(
      (res: any) => {
        this.wishlist = res.result;
        this.wishlistCount = this.wishlist.length;
        console.log(this.wishlist);
      },
      (err: any) => console.log(err)
    );
  }

  remove(book: any) {
    this.wishListService.removeItem(book.product_id._id).subscribe(
      (res: any) => {
        this.getWishlist();
      },
      (err: any) => console.log(err)
    );
  }
}
