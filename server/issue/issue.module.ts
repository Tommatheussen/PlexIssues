import { Module } from '@nestjs/common';
import { IssuesController } from './issue.controller';
import { IssuesService } from './issue.service';
import { SharedModule } from '../shared.module';

@Module({
  controllers: [IssuesController],
  components: [IssuesService],
  imports: [SharedModule]
})
export class IssuesModule {}
