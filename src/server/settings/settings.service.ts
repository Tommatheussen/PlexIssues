import { Component } from '@nestjs/common';
import { Settings } from '../interfaces';

import { DatabaseService } from '../database.service';

@Component()
export class SettingsService {
  constructor(private readonly _databaseService: DatabaseService) {}

  create(settings: Settings) {
    this._databaseService.saveSettings(settings);
  }

  getSettings(): Settings {
    return this._databaseService.loadSettings();
  }
}
