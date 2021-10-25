import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';
@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;
  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  getallbooks() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    });
    return this.http.GetService(
      this.BACKEND_BASE_URL + '/bookstore_user/get/book',
      true,
      header
    );
  }

  getwishlist() {
    this.token = localStorage.getItem('token');

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
}
