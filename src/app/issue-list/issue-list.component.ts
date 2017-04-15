import { Component, OnInit } from '@angular/core';

import { Issue } from './../issue';
import { IssueService } from './../issue.service';

@Component({
  selector: 'plexissues-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]
})
export class IssueListComponent implements OnInit {
  issues: Issue[];

  sort: string = 'openDate';

  sortOptions: { value: string, name: string }[] = [
    {
      value: 'status',
      name: 'Issue Status'
    },
    {
      value: 'openDate',
      name: 'Open Date'
    },
    {
      value: 'type',
      name: 'Issue Type'
    }
  ]

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues(this.sort)
      .then(issues => this.issues = issues);
  }

}
