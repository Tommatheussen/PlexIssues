import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { SharedModule } from '../shared.module';

@Module({
  controllers: [SettingsController],
  components: [SettingsService],
  imports: [SharedModule]
})
export class SettingsModule {}
