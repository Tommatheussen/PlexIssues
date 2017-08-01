import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { PlexItem } from './plex-item';

import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class PlexService {
  private PlexUrl: string = '/api/plex';

  constructor(private http: Http, private storage: SessionStorageService) { }

  searchPlex(search: string): Observable<PlexItem[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const settings = this.storage.retrieve('setup');
    const token = this.storage.retrieve('token');

    return this.http.post(`${this.PlexUrl}/search`,
      JSON.stringify({
        search,
        host: settings.hostname,
        port: settings.port,
        token
      }),
    { headers })
      .map((res: Response) => res.json() as PlexItem[]);
  }

  getPlexItem(key: string): Observable<PlexItem> {
    let params = new URLSearchParams();
    params.append('key', key);

    return this.http.get(this.PlexUrl, { search: params })
      .map((res: Response) => res.json() as PlexItem);
  }
};
