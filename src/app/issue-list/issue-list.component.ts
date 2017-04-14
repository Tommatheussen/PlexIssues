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

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues()
      .then(issues => this.issues = issues);
  }

}
