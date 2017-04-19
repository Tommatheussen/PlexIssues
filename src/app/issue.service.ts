import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Issue } from './issue';

@Injectable()
export class IssueService {
  private IssueUrl: string = '/api/issue';

	constructor(private http: Http) { }

  getIssues(sort: string, status: string): Observable<Issue[]> {
    let params = new URLSearchParams();
    params.append('sort', sort);
    params.append('status', status);

    return this.http.get(this.IssueUrl, { search: params })
			.map((res:Response) => res.json() as Issue[])
		//	.catch(this.handleError);
  }
  
  updateIssue(issue: Issue): Observable<Issue[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.IssueUrl}/${issue.id}`, JSON.stringify(issue), { headers: headers })
      .map((res:Response) => res.json())
     // .catch(this.handleError);
  }

  addIssue(issue: Issue): Observable<Issue> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.IssueUrl, JSON.stringify(issue), { headers: headers })
      .map((res: Response) => res.json())
  }

	getLatestIssues(): Observable<Issue[]> {
		let params = new URLSearchParams();
    params.append('limit', '5');
    params.append('sort', 'openDate');
    params.append('order', 'DESC');
    params.append('status', 'new');

		return this.http.get(this.IssueUrl, { search: params })
			.map((res:Response) => res.json() as Issue[])
  }

  removeIssue(issue): void {
    return;
  }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
