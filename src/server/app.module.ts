import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Change } from './entities/change.entity';
import { Issue } from './entities/issues.entity';
import { Item } from './entities/item.entity';
import { Metadata } from './entities/metadata.entity';
import { IssuesModule } from './issue/issue.module';
import { PlexModule } from './plex/plex.module';

@Module({
  imports: [
    IssuesModule,
    // SettingsModule,
    PlexModule,
    TypeOrmModule.forRoot({
      type: 'sqljs',
      location: 'plexissues.sqlite',
      entities: [Issue, Item, Change, Metadata],
      autoSave: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([Issue, Item, Change, Metadata])
  ],
  controllers: [AppController]
})
export class ApplicationModule {}
