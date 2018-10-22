import { Module } from '@nestjs/common';
import { IssuesController } from './issue.controller';
import { IssuesService } from './issue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from '../entities/issues.entity';

@Module({
  controllers: [IssuesController],
  providers: [IssuesService],
  imports: [TypeOrmModule.forFeature([Issue])]
})
export class IssuesModule {}
