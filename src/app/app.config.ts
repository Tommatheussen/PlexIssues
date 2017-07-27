import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {
  setup: Boolean = false;

  constructor(private http: Http) { }

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      return this.http.get('/api/settings/initial')
        .map((res: Response) => res.json()).toPromise()
        .then(setupResult => {
          this.setup = setupResult;
          resolve(true);
        });
    });
  }
}
