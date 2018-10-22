import { Controller, Get, Param } from '@nestjs/common';
import { PlexService } from './plex.service';

@Controller('plex')
export class PlexController {
  constructor(private readonly _plexService: PlexService) {}

  // @HttpCode(204)
  // @Post('login')
  // async create(@Body() credentials: Credentials) {
  //   return this._plexService.login(credentials);
  // }

  @Get('search/:term')
  async search(@Param('term') term: string) {
    return this._plexService.search(term);
  }

  @Get(':key')
  async metadata(@Param('key') key: string) {
    return this._plexService.getMetadata(key);
  }
}
