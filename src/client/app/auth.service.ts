import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private http: Http, private storage: SessionStorageService) {
    this.loggedIn = this.storage.retrieve('token');
    // TODO: Check back end token valid
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/plex/login', JSON.stringify({ username, password }), { headers: headers }).pipe(
      map((res: Response) => {
        console.log(res.json());
        this.loggedIn = true;

        this.storage.store('token', true);
        return true;
      })
    );
  }
}
