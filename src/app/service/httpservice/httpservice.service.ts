import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  constructor(private httpClient: HttpClient) {}

  GetService(url = '', token: boolean = false, headers: any = null) {
    return this.httpClient.get(url, token && headers);
  }

  // PostService(
  //   URL: string,
  //   payload: any,
  //   token: boolean = false,
  //   header: any = null
  // ) {
  //   return this.httpClient.post(URL, payload, token && header);
  // }

  PostService(url = '', payload = null, headers: any = null) {
    return this.httpClient.post(url, payload, { headers });
  }

  postService(
    URL: string,
    payload: any,
    token: boolean = false,
    header: any = null
  ) {
    return this.httpClient.post(URL, payload, token && header);
  }

  PutService(url = '', payload = null, headers: any = null) {
    return this.httpClient.put(url, payload, { headers });
  }

  putService(
    URL: string,
    payload: any,
    token: boolean = false,
    header: any = null
  ) {
    return this.httpClient.put(URL, payload, token && header);
  }

  DeleteService(url = '', headers: any = null) {
    return this.httpClient.delete(url, { headers });
  }

  deleteService(URL: string, token: boolean = false, header: any = null) {
    return this.httpClient.delete(URL, token && header);
  }
}
