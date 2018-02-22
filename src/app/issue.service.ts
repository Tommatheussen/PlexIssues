import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Issue } from '@models';

interface IServerResponse {
  issues: Issue[];
  count: number;
}

@Injectable()
export class IssueService {
  private IssueUrl: string = '/api/issues';

  constructor(private http: Http, private _http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    let params = new URLSearchParams();
    // params.append('sort', sort);
    // params.append('status', status);
    // params.append('page', page.toString());

    return this._http.get<Issue[]>(this.IssueUrl);
    //.map(result => result.issues);// , { search: params })
    // .map((res: Response) => res.json() as IServerResponse)
    //	.catch(this.handleError);
  }

  updateIssue(issue: Issue): Observable<Issue[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(`${this.IssueUrl}/${issue.id}`, JSON.stringify(issue), { headers: headers })
      .map((res: Response) => res.json());
    // .catch(this.handleError);
  }

  addIssue(issue: Issue): Observable<Issue> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.IssueUrl, JSON.stringify(issue), { headers: headers })
      .map((res: Response) => res.json());
  }

  getLatestIssues(): Observable<Issue[]> {
    return this.http.get(`${this.IssueUrl}/latest`).map((res: Response) => res.json() as Issue[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
