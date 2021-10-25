import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;
  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
  // registerUser(reqData: any) {
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'content-Type': 'application/json',
  //       Authorization: this.token,
  //     }),
  //   };
  //   return this.httpService.PostService(
  //     this.BACKEND_BASE_URL + '/bookstore_user/registration',
  //     reqData,
  //     headers
  //   );
  // }

  // loginUserService(reqData: any) {
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'content-Type': 'application/json',
  //       Authorization: this.token,
  //     }),
  //   };
  //   return this.httpService.PostService(
  //     this.BACKEND_BASE_URL + '/bookstore_user/login',
  //     reqData,
  //     headers
  //   );
  // }

  registerservice(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/bookstore_user/registration',
      payload,
      header
    );
  }

  loginservice(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/bookstore_user/login',
      payload,
      header
    );
  }
}
