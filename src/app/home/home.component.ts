import { Component, OnInit } from "@angular/core";

import { Issue } from "@models";
import { IssueService } from "./../issue.service";

import { Observable } from "rxjs";

@Component({
  selector: "plexissues-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [IssueService]
})
export class HomeComponent implements OnInit {
  issues: Observable<Issue[]>;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.getIssues(1);
  }

  getIssues(page: number): void {
    this.issues = this.issueService.getIssues(); //.subscribe(result => this.issues = result) //this.sort, this.status, page)
    /* .do(res => {
        this.total = res.count;
        this.p = page;
        this.loading = false;
      })*/ //.map(res => res.issues);
  }
  // this.issueService.getLatestIssues()
  //  .subscribe(issues => this.issues = issues);
  //}
}
