import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;
  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('token');
  }

  addItem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/add_wish_list/' + productID,
      null,
      true,
      header
    );
  }

  getItems() {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };

    return this.http.GetService(
      this.BACKEND_BASE_URL + '/bookstore_user/get_wishlist_items',
      true,
      header
    );
  }

  removeItem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.deleteService(
      this.BACKEND_BASE_URL +
        '/bookstore_user/remove_wishlist_item/' +
        productID,
      null,
      true,
      header
    );
  }
}
