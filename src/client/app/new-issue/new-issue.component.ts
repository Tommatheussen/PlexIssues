import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Issue, PlexItem } from '@models';

import { IssueService } from '../issue.service';
import { PlexService } from '../plex.service';

import { NewIssue } from './new-issue.interface';

import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'plexissues-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css'],
  providers: [IssueService, PlexService]
})
export class NewIssueComponent implements OnInit {
  public issueForm: FormGroup;
  public submitted: boolean;

  plexItems: Observable<PlexItem[]>;

  dict: { [index: string]: string } = {
    movie: 'local_movies',
    show: 'tv',
    episode: 'tv',
    artist: 'person',
    album: 'album',
    track: 'music_note'
  };

  constructor(private issueService: IssueService, private plexService: PlexService, private _fb: FormBuilder) {}

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.issueForm = this._fb.group({
      plexitem: ['', <any>Validators.required],
      type: ['', <any>Validators.required],
      description: ['']
    });

    this.plexItems = this.issueForm.controls['plexitem'].valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter(term => term),
      startWith<string | PlexItem>(''),
      map(value => (typeof value === 'string' ? value : value.title)),
      switchMap(name => this.getPlexItems(name))
    );
  }

  getPlexItems(val: string): Observable<PlexItem[]> {
    return val ? this.plexService.searchPlex(val) : of([]);
  }

  createIssue(model: NewIssue, isValid: boolean): void {
    let newIssue = new Issue();
    newIssue.type = model.type;
    newIssue.description = model.description;
    newIssue.item = {
      key: model.plexitem.ratingKey,
      name: model.plexitem.title,
      type: model.plexitem.type
    };

    this.issueService.addIssue(newIssue).subscribe(() => {
      this.issueForm.reset();
    });
  }

  displayFn(item: PlexItem) {
    return item ? item.title : item;
  }
}
