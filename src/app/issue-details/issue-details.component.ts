import { Component, OnInit } from '@angular/core';

import { Issue } from '@models';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'plexissues-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
  providers: [DetailsService]
})
export class IssueDetailsComponent implements OnInit {
  issueDetails: Observable<Issue>;
  metadata: Observable<any>;

  private issueId: string;

  constructor(private _route: ActivatedRoute, private _detailsService: DetailsService) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.issueId = params['issue_id'];

      this.issueDetails = this._detailsService.getIssueDetails(this.issueId).map(result => {
        this.metadata = this._detailsService._getPlexMetadata(result.item.key);
        return result;
      });
    });
  }
}
