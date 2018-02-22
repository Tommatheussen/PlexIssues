import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { Issue, Credentials } from '../interfaces';
import { PlexService } from './plex.service';

@Controller('plex')
export class PlexController {
  constructor(private readonly _plexService: PlexService) {}

  @HttpCode(204)
  @Post('login')
  async create(@Body() credentials: Credentials) {
    return this._plexService.login(credentials);
  }
}
