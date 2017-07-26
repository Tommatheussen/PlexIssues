import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthService {
  authToken: string;
  loggedIn = false;

  constructor(private http: Http, private storage: SessionStorageService) {
    this.authToken = this.storage.retrieve('token');
    if (this.authToken) {
      this.loggedIn = true;
    }
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/plex/login', JSON.stringify({ username, password }), { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        this.authToken = res.json().token;
        this.loggedIn = true;

        this.storage.store('token', this.authToken);
        return true;
      });
  }
}
