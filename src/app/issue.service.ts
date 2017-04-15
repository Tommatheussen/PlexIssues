import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';

@Injectable()
export class IssueService {
  private IssueUrl: string = '/api/issue';

	constructor(private http: Http) { }

	getIssues(): Promise<Issue[]> {
		return this.http.get(this.IssueUrl)
			.toPromise()
			.then(function(response) {
				console.log(response.json());
				return response.json() as Issue[]
			})
			.catch(this.handleError);
  }
  
  updateIssue(issue: Issue): Observable<Issue[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.IssueUrl}/${issue.id}`, JSON.stringify(issue), { headers: headers })
      .map((res:Response) => res.json())
     // .catch(this.handleError);
  }

	getLatestIssues(): Promise<Issue[]> {
		let params = new URLSearchParams();
    params.append('limit', '5');
    params.append('sort', 'openDate');
    params.append('order', 'DESC');
    params.append('status', 'new');

		return this.http.get(this.IssueUrl, { search: params })
			.toPromise()
			.then(function(response) {
				return response.json() as Issue[]
			})
			.catch(this.handleError);
  }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

  addIssue(issue: Issue): Promise<Issue> {
    return Promise.resolve(issue);
  }
}
