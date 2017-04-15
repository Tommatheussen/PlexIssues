import { Component,  Input } from '@angular/core';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'plexissues-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [IssueService]
})
export class IssueComponent {
  @Input() issue: Issue;

  constructor(private issueService: IssueService) { }

  updateIssue(status): void {
    const copy = { ...this.issue };
    copy.status = status;
    this.issueService.updateIssue(copy)
      .subscribe(() => this.issue = { ...copy });
  }

  removeIssue(): void {
    this.issueService.removeIssue(this.issue)
  }
}