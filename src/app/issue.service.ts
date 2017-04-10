import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { ISSUES } from './mock-issues';

@Injectable()
export class IssueService {
  getLatestIssues(): Promise<Issue[]> {
    let latestIssues: Issue[] = ISSUES.sort((a, b): number => {
      return b.date.getTime() - a.date.getTime();
    }).filter(a => {
      return a.open;
    }).slice(0, 5);
    return Promise.resolve(latestIssues);
  }

  addIssue(issue: Issue): Promise<Issue> {
    ISSUES.push(issue);
    return Promise.resolve(issue);
  }

  constructor() { }

}
