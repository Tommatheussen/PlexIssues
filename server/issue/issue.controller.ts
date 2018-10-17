import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { IssuesService } from './issue.service';
import { Issue } from '../interfaces';

@Controller('issues')
export class IssuesController {
  constructor(private readonly _issuesService: IssuesService) {}

  @HttpCode(204)
  @Post()
  async create(@Body() issue: Issue) {
    this._issuesService.create(issue);
  }

  @Get()
  async findAll(): Promise<Issue[]> {
    return this._issuesService.findAll();
  }

  @Get(':id')
  async get(@Param('id') issue_id): Promise<Issue> {
    return this._issuesService.getIssue(issue_id);
  }
}
