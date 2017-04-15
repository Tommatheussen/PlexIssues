import { Component,  Input } from '@angular/core';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'plexissues-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [IssueService],
})
export class IssueComponent {
  @Input() issue: Issue;

  constructor(private issueService: IssueService) { }

  confirmIssue(): void {
    const copy = { ...this.issue };
    copy.status = 'confirmed';
    this.issueService.updateIssue(copy)
      .subscribe(() => {
        console.log(this.issue.status);
        return this.issue = { ...copy };
        //console.log(issue.status);
      });
  }

}
