import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig {
  constructor(private http: HttpClient, private storage: SessionStorageService) {}

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.storage.retrieve('setup')) {
        return this.http
          .get<{ status: string }>('/api/settings/initial')
          .toPromise()
          .then(
            setupResult => {
              if (setupResult.status && setupResult.status === 'exists') {
                this.storage.store('setup', true);
              }
              resolve(true);
            },
            error => {
              console.log(error);
              resolve(false);
            }
          );
      } else {
        resolve(true);
      }
    });
  }
}
