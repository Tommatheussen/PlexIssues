import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Issue } from '@models';
import { IssueService } from './../issue.service';

@Component({
  selector: 'plexissues-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]
})
export class IssueListComponent implements OnInit {
  issues: Observable<Issue[]>;
  loading: Boolean;


  p: number = 1;
  total: number;

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

  ngOnInit(): void {
    this.getIssues(this.p);
  }

  getIssues(page: number): void {
    this.loading = true;
   /* this.issues = this.issueService.getIssues(this.sort, this.status, page)
      .do(res => {
        this.total = res.count;
        this.p = page;
        this.loading = false;
      }).map(res => res.issues);*/
  }

}
