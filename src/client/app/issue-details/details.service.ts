import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { PlexItem, Issue } from '@models';

import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {
  constructor(private http: HttpClient) {}

  _getPlexMetadata(key: string) {
    return this.http.get(`api/plex/${key}`);
  }

  getIssueDetails(issue_id: string): Observable<Issue> {
    return this.http.get<Issue>(`api/issues/${issue_id}`);
  }
}
