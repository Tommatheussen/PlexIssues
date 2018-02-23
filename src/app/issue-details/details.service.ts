import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { PlexItem, Issue } from '@models';

import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {
  constructor(private http: HttpClient) {}

  getMetadata() {}

  getIssueDetails(issue_id: string): Observable<Issue> {
    return this.http.get<Issue>(`api/issues/${issue_id}`);
  }
}
