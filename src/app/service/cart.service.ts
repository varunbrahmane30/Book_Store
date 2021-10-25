import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from './httpservice/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;
  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('token');
  }

  addcartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/add_cart_item/' + productID,
      null,
      true,
      header
    );
  }

  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };

    return this.http.GetService(
      this.BACKEND_BASE_URL + '/bookstore_user/get_cart_items',
      true,
      header
    );
  }

  removecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.deleteService(
      this.BACKEND_BASE_URL + '/bookstore_user/remove_cart_item/' + productID,
      true,
      header
    );
  }

  updateitemcount(productID: any, payload: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.putService(
      this.BACKEND_BASE_URL + '/bookstore_user/cart_item_quantity/' + productID,
      payload,
      true,
      header
    );
  }

  checkout(cartItems: any) {
    const payload = {
      orders: cartItems,
    };
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/add/order',
      payload,
      true,
      header
    );
  }
}
