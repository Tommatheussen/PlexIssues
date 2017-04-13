import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';

@Injectable()
export class IssueService {
  private IssueUrl: string = "/api/issue";

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

	getLatestIssues(): Promise<Issue[]> {
		let params = new URLSearchParams();
		params.set('limit', '5');
		params.set('sort', 'openDate');
		params.set('status', 'new');

		return this.http.get(this.IssueUrl, { search: params })
			.toPromise()
			.then(function(response) {
				console.log(response.json());
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
