import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;
  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('token');
  }

  getItems(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };

    return this.http.GetService(
      this.BACKEND_BASE_URL + '/bookstore_user/get/feedback/' + productID,
      true,
      header
    );
  }

  addFeedback(productID: any, data: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/add/feedback/' + productID,
      data,
      true,
      header
    );
  }
}
