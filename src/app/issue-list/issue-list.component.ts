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
  status: string = undefined;

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

  statusFilterOptions: { value: string, name: string }[] = [
    {
      value: undefined,
      name: 'All'
    },
    {
      value: 'new',
      name: 'New'
    },
    {
      value: 'done',
      name: 'Done'
    },
    {
      value: 'rejected',
      name: 'Rejected'
    },
    {
      value: 'confirmed',
      name: 'Confirmed'
    }
  ]

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues(this.sort, this.status)
      .subscribe(issues => this.issues = issues);
  }

}
