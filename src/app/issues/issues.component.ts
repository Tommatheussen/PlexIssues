import { Component,  Input, ChangeDetectionStrategy } from '@angular/core';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'plexissues-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [IssueService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class IssuesComponent {
  @Input() issues: Issue[];

  constructor() { }
}
