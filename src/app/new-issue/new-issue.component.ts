import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Issue, PlexItem } from '@models';

import { IssueService } from '../issue.service';
import { PlexService } from '../plex.service';

import { NewIssue } from './new-issue.interface';

import { Observable } from 'rxjs/Observable';
import { startWith, switchMap, map } from 'rxjs/operators';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';

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

    this.plexItems = this.issueForm.controls['plexitem'].valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .pipe(
        startWith<string | PlexItem>(''),
        map(value => (typeof value === 'string' ? value : value.title)),
        switchMap(name => this.getPlexItems(name))
      );
  }

  getPlexItems(val: string): Observable<PlexItem[]> {
    return val ? this.plexService.searchPlex(val) : Observable.of([]);
  }

  createIssue(model: NewIssue, isValid: boolean): void {
    let newIssue = new Issue();
    newIssue.type = model.type;
    newIssue.description = model.description;
    newIssue.item = model.plexitem.ratingKey;

    this.issueService.addIssue(newIssue).subscribe(() => {
      this.issueForm.reset();
    });
  }

  displayFn(item: PlexItem) {
    return item ? item.title : item;
  }
}
