import { Component } from '@nestjs/common';
import { Issue } from '../interfaces';

import { DatabaseService } from '../database.service';

import { Observable } from 'rxjs/Observable';

import { v4 as uuid } from 'uuid';

@Component()
export class IssuesService {
  private readonly issues: Issue[] = [];

  constructor(private readonly _databaseService: DatabaseService) {}

  create(issueData: Issue) {
    const issue: Issue = {
      id: uuid(),
      type: issueData.type,
      item: issueData.item,
      description: issueData.description,
      status: 'new',
      openDate: new Date()
    };
    return this._databaseService.insertIssue(issue);
  }

  findAll(): Promise<Issue[]> {
    return this._databaseService.getIssues();
  }
}
