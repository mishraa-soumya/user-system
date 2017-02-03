import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';

@Injectable()
export class UsersService {
  private serviceurl: string = 'http://localhost/demoapi/customer.php';

  constructor(private http: Http) {}
  /**
   * To save user details on server
   */
  saveUserData(data: Object): Observable<User> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.serviceurl, data, options)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
 }
}
