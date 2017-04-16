import { Component } from '@angular/core';

import { Issue } from './../issue';
import { IssueService } from './../issue.service';

@Component({
  selector: 'plexissues-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css'],
  providers: [IssueService]
})
export class NewIssueComponent {
  issue: Issue = new Issue;

  constructor(private issueService: IssueService) { }

  createIssue(): void {
    this.issueService.addIssue(this.issue)
      .subscribe(() => {
        this.issue = new Issue;
      });
  }
}
