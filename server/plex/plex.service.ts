import { Component } from '@nestjs/common';
import { Issue, Credentials } from '../interfaces';

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
      let searchResult = rp(loginOptions).then(
        result => {
          console.log(result);
          this._databaseService.saveToken(result.user.authToken);
          resolve();
        },
        err => {
          console.log(`Error message: ${err}`);
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
