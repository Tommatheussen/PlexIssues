import { Module } from '@nestjs/common';
import { PlexController } from './plex.controller';
import { PlexService } from './plex.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metadata } from '../entities/metadata.entity';

@Module({
  controllers: [PlexController],
  providers: [PlexService],
  imports: [TypeOrmModule.forFeature([Metadata])]
})
export class PlexModule {}
