import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { PlexItem } from './plex-item';

@Injectable()
export class PlexService {
  private PlexUrl: string = '/api/plex';

  constructor(private http: Http) { }

  searchPlex(search: string): Observable<PlexItem[]> {
    let params = new URLSearchParams();
    params.append('search', search);

    return this.http.get(`${this.PlexUrl}/search`, { search: params })
      .map((res: Response) => res.json() as PlexItem[]);
  }

  getPlexItem(key: string): Observable<PlexItem> {
    let params = new URLSearchParams();
    params.append('key', key);

    return this.http.get(this.PlexUrl, { search: params })
      .map((res: Response) => res.json() as PlexItem);
  }
};