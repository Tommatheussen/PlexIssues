import { Component } from '@nestjs/common';
import { Issue } from '../interfaces';

import { DatabaseService } from '../database.service';

import { Observable } from 'rxjs/Observable';

@Component()
export class IssuesService {
  private readonly issues: Issue[] = [];

  constructor(private readonly _databaseService: DatabaseService) {}

  create(issue: Issue) {
    return this._databaseService.insertIssue(issue);
  }

  findAll(): Promise<Issue[]> {
    return this._databaseService.getIssues();
  }
}
