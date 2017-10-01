import { Component, OnInit } from '@angular/core';

import { Issue } from '@models';
import { IssueService } from './../issue.service';

@Component({
  selector: 'plexissues-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [IssueService]
})
export class HomeComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.getLatestIssues();
  }

  getLatestIssues(): void {
    this.issueService.getLatestIssues()
      .subscribe(issues => this.issues = issues);
  }
}
