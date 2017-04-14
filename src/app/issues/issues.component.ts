import { Component,  Input } from '@angular/core';

import { Issue } from '../issue';

@Component({
  selector: 'plexissues-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  @Input() issues: Issue[];

  constructor() { }

}
