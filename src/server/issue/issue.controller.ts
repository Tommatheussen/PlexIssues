import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { IssuesService } from './issue.service';
import { Issue } from '../entities/issues.entity';

@Controller('issues')
export class IssuesController {
  constructor(private readonly _issuesService: IssuesService) {}

  @HttpCode(204)
  @Post()
  async create(@Body() issue: Issue) {
    return await this._issuesService.create(issue);
  }

  @Get()
  async findAll(): Promise<Issue[]> {
    return this._issuesService.findAll();
  }

  @Get(':id')
  async get(@Param('id') issue_id: number): Promise<Issue> {
    return this._issuesService.getIssue(issue_id);
  }
}
