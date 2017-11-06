import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';


import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TunnelService {
  constructor(private http: Http) {
  }

  private apiUrl = '/api/';

  itemPost(info) {
    const url = this.apiUrl + 'postItem';
    const req = this.http.post(url, info);
    req.subscribe();
  }

  getMenu() {
    const url = this.apiUrl + 'getMenu';
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }


}
