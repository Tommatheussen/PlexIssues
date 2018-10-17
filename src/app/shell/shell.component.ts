import { Component, OnInit } from '@angular/core';

import { Issue } from '@models';
import { IssueService } from './../issue.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'plexissues-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  providers: [IssueService]
})
export class ShellComponent implements OnInit {
  issues: Observable<Issue[]>;

  _iconDict: { [index: string]: string } = {
    movie: 'local_movies',
    show: 'tv',
    episode: 'tv',
    artist: 'person',
    album: 'album',
    track: 'music_note'
  };

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.getIssues(1);
  }

  getIssues(page: number): void {
    this.issues = this.issueService.getIssues();
  }
}
