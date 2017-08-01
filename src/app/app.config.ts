import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AppConfig {
  constructor(private http: Http, private storage: SessionStorageService) { }

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.storage.retrieve('setup')) {
        return this.http.get('/api/settings/initial')
          .map((res: Response) => res.json())
          .toPromise()
          .then(setupResult => {
            if (setupResult.settings) {
              this.storage.store('setup', setupResult.settings);
            }
            resolve(true);
          });
      } else {
        resolve(true);
      }
    });
  }
}
