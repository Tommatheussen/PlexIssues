import { Injectable } from '@nestjs/common';
import * as os from 'os';
import * as rp from 'request-promise';
import { InjectRepository } from '@nestjs/typeorm';

const config = require('../plex.json');
const serverConfig = require('../server.config.json');

import { Item } from '../entities/item.entity';
import { Repository } from 'typeorm';
import { Metadata } from 'server/entities/metadata.entity';

@Injectable()
export class PlexService {
  constructor(@InjectRepository(Metadata) private readonly metadataRepository: Repository<Metadata>) {}

  // login(credentials: Credentials) {
  //   const loginOptions = {
  //     method: 'POST',
  //     uri: 'https://plex.tv/users/sign_in.json',
  //     headers: this._getHeaders(),
  //     json: true,
  //     body: {
  //       user: {
  //         login: credentials.username,
  //         password: credentials.password
  //       }
  //     }
  //   };

  //   return new Promise((resolve, reject) => {
  //     rp(loginOptions).then(
  //       result => {
  //         this._databaseService.saveToken(result.user.authToken);
  //         resolve();
  //       },
  //       err => {
  //         console.log(`Login failed: ${err}`);
  //         // TODO: Proper handling
  //         reject(err);
  //       }
  //     );
  //   });
  // }

  search(term: string) {
    const searchOptions = {
      method: 'GET',
      uri: `http://${serverConfig.hostname}:${serverConfig.port}/search`,
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

  async getMetadata(key: string) {
    const exists = await this.metadataRepository.count({ itemKey: key });

    if (exists !== 0) {
      return await this.metadataRepository.findOne({ itemKey: key });
    } else {
      const metadataOptions = {
        method: 'GET',
        uri: `http://${serverConfig.hostname}:${serverConfig.port}/library/metadata/${key}`,
        headers: this._getHeaders(),
        json: true
      };

      return new Promise((resolve, reject) => {
        rp(metadataOptions).then(
          async result => {
            await this.metadataRepository.insert({
              ...result.MediaContainer.Metadata[0],
              itemKey: key
            });
            resolve(result.MediaContainer.Metadata[0] || []);
          },
          err => {
            console.log(`Metadata failed: ${err}`);
            reject(err);
          }
        );
      });
    }
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
      'X-Plex-Token': serverConfig.token
    };
  };
}
