import { Module } from '@nestjs/common';
import { IssuesModule } from './issue/issue.module';
import { SettingsModule } from './settings/settings.module';
import { PlexModule } from './plex/plex.module';

@Module({
  imports: [IssuesModule, SettingsModule, PlexModule]
})
export class ApplicationModule {}
