import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Settings } from '../interfaces';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly _settingsService: SettingsService) {}

  @Post('setup')
  async create(@Body() settings: Settings): Promise<void> {
    this._settingsService.create(settings);
  }

  @Get('initial')
  async getSettings(): Promise<{ status: string }> {
    let settings = this._settingsService.getSettings();
    return { status: settings ? 'exists' : 'notfound' };
  }
}
