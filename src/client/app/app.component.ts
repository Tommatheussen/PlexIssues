import { Component } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from '@models';

import { Observable } from 'rxjs';

@Component({
  selector: 'plexissues-root',
  templateUrl: './app.component.html',
  // template: `
  // <plexissues-toolbar></plexissues-toolbar>
  // <router-outlet fxFlex></router-outlet>
  // `,
  styleUrls: ['./app.component.css'],
  providers: [IssueService]
})
export class AppComponent {
  issues: Observable<Issue[]>;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.getIssues(1);
  }

  getIssues(page: number): void {
    this.issues = this.issueService.getIssues();
  }
}
