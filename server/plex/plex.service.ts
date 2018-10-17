import { Component } from '@nestjs/common';
import { Issue, Credentials, Settings } from '../interfaces';

import * as rp from 'request-promise';
import * as os from 'os';
import { DatabaseService } from '../database.service';

const config = require('../plex.json');

@Component()
export class PlexService {
  constructor(private _databaseService: DatabaseService) {}
  login(credentials: Credentials) {
    const loginOptions = {
      method: 'POST',
      uri: 'https://plex.tv/users/sign_in.json',
      headers: this._getHeaders(),
      json: true,
      body: {
        user: {
          login: credentials.username,
          password: credentials.password
        }
      }
    };

    return new Promise((resolve, reject) => {
      rp(loginOptions).then(
        result => {
          this._databaseService.saveToken(result.user.authToken);
          resolve();
        },
        err => {
          console.log(`Login failed: ${err}`);
          // TODO: Proper handling
          reject(err);
        }
      );
    });
  }

  search(term: string) {
    const settings: Settings = this._databaseService.loadSettings();
    const searchOptions = {
      method: 'GET',
      uri: `http://${settings.hostname}:${settings.port}/search`,
      headers: this._getHeaders(),
      json: true,
      qs: {
        query: term
      }
    };

    return new Promise((resolve, reject) => {
      rp(searchOptions).then(
        result => {
          resolve(result.MediaContainer.Metadata || []);
        },
        err => {
          console.log(`Search failed: ${err}`);
          reject(err);
        }
      );
    });
  }

  getMetadata(key: string) {
    const settings: Settings = this._databaseService.loadSettings();
    const metadataOptions = {
      method: 'GET',
      uri: `http://${settings.hostname}:${settings.port}/library/metadata/${key}`,
      headers: this._getHeaders(),
      json: true
    };

    return new Promise((resolve, reject) => {
      rp(metadataOptions).then(
        result => {
          resolve(result.MediaContainer.Metadata[0] || []);
        },
        err => {
          console.log(`Metadata failed: ${err}`);
          reject(err);
        }
      );
    });
  }

  private _getHeaders = () => {
    return {
      'X-Plex-Platform': os.platform(),
      'X-Plex-Platform-Version': os.release(),
      'X-Plex-Client-Identifier': config.identifier,
      'X-Plex-Product': config.product,
      'X-Plex-Version': config.version,
      'X-Plex-Device': config.device,
      'X-Plex-Device-Name': config.device,
      'X-Plex-Token': this._databaseService.getToken()
    };
  };
}
