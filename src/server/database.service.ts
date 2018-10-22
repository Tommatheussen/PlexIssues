import { Component } from '@nestjs/common';
import * as fs from 'fs';
const DB = require('nosql');

import { Settings, Issue } from './interfaces';

@Component()
export class DatabaseService {
  private readonly _nosql: any;

  private TOKEN = 'token';
  private SETTINGS = 'settings';

  constructor() {
    if (!fs.existsSync('./database')) {
      fs.mkdirSync('./database');
    }

    this._nosql = DB.load('./database/database.nosql');
  }

  loadSettings = (): Settings => {
    return this._nosql.meta(this.SETTINGS);
  };

  saveSettings = (settings: Settings) => {
    return this._nosql.meta(this.SETTINGS, settings);
  };

  saveToken = (token: string) => {
    return this._nosql.meta(this.TOKEN, token);
  };

  getToken = () => {
    return this._nosql.meta(this.TOKEN);
  };

  insertIssue = (document: Issue) => {
    return new Promise((resolve, reject) => {
      this._nosql.insert(document).callback((err, count) => {
        if (err) reject(err);
        else resolve();
      });
    });
  };

  getIssues = (): Promise<Issue[]> => {
    return new Promise((resolve, reject) => {
      this._nosql.find().callback((err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  };

  getIssue = (issue_id): Promise<Issue> => {
    return new Promise((resolve, reject) => {
      this._nosql.find().make(builder => {
        builder.where('id', issue_id);
        builder.first();
        builder.callback((err, response) => {
          if (err) reject(err);
          else resolve(response);
        });
      });
    });
  };
}
