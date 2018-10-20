import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { PlexItem } from '@models';

import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable()
export class PlexService {
  private PlexUrl: string = '/api/plex';

  constructor(private http: HttpClient, private storage: SessionStorageService) {}

  searchPlex(search: string): Observable<PlexItem[]> {
    return this.http.get<PlexItem[]>(`${this.PlexUrl}/search/${search}`);
  }

  getPlexItem(key: string): Observable<PlexItem> {
    const settings = this.storage.retrieve('setup');
    const token = this.storage.retrieve('token');

    return this.http
      .post(
        this.PlexUrl,
        JSON.stringify({
          key,
          host: settings.hostname,
          port: settings.port,
          token
        })
      )
      .pipe(map((res: Response) => res.json() as PlexItem));
  }
}
