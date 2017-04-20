import { Component,  Input, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { PlexItem } from '../plex-item';

import { IssueService } from '../issue.service';
import { PlexService } from '../plex.service';

@Component({
  selector: 'plexissues-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [
    IssueService,
    PlexService
  ]
})
export class IssueComponent implements OnInit{
  @Input() issue: Issue;

  public metadata: PlexItem;

  dict: { [index: string]: string; } = {
    movie: 'local_movies',
    show: 'tv',
    episode: 'tv',
    artist: 'person',
    album: 'album',
    track: 'music_note'
  }

  constructor(
    private issueService: IssueService,
    private plexService: PlexService) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.plexService.getPlexItem(this.issue.item)
      .subscribe((item) => {
        console.log(item);
        this.metadata = item;
        //TODO: Add content to card
      });
  }

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