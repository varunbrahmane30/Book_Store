import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;

  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('token');
  }

  adminRegistrationService(payload: any) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/admin/registration',
      payload,
      false,
      header
    );
  }
  adminLoginService(payload: any) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/admin/login',
      payload,
      false,
      header
    );
  }

  adminupdatebookservice(payload: any, product_id: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.putService(
      this.BACKEND_BASE_URL + '/bookstore_user/admin/update/book/' + product_id,
      payload,
      true,
      header
    );
  }
  admindeletebookservice(product_id: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.deleteService(
      this.BACKEND_BASE_URL + '/bookstore_user/admin/delete/book/' + product_id,
      null,
      true,
      header
    );
  }

  adminnewbookservice(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.postService(
      this.BACKEND_BASE_URL + '/bookstore_user/admin/add/book',
      payload,
      true,
      header
    );
  }
}
