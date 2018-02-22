import { Module } from '@nestjs/common';
import { PlexController } from './plex.controller';
import { SharedModule } from '../shared.module';
import { PlexService } from './plex.service';

@Module({
  controllers: [PlexController],
  components: [PlexService],
  imports: [SharedModule]
})
export class PlexModule {}
