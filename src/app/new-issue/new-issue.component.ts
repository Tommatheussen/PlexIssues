import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Issue } from './../issue';
import { IssueService } from './../issue.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';

@Component({
  selector: 'plexissues-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css'],
  providers: [IssueService]
})
export class NewIssueComponent {
  issue: Issue = new Issue;
  plexItemsCtrl: FormControl;
  plexItems: any;

  constructor(private issueService: IssueService) {
    this.plexItemsCtrl = new FormControl();
    this.plexItems = this.plexItemsCtrl.valueChanges
      .debounceTime(1000)  
      .startWith(null)
      .switchMap(name => this.getPlexItems(name));
  }
  
  getPlexItems(val: string) {
    return val ? this.issueService.searchPlex(val) : Observable.from([]);
  }

  createIssue(): void {
    this.issueService.addIssue(this.issue)
      .subscribe(() => {
        this.issue = new Issue;
      });
  }
}
