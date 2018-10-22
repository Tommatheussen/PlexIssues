import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from '../entities/issues.entity';

@Injectable()
export class IssuesService {
  constructor(@InjectRepository(Issue) private readonly issueRepository: Repository<Issue>) {}

  async create(issue: Issue) {
    issue.status = 'new';
    issue.openDate = new Date();

    return await this.issueRepository.save(issue);
  }

  async findAll(): Promise<Issue[]> {
    return await this.issueRepository.find({ relations: ['item'] });
  }

  async getIssue(issue_id: number): Promise<Issue> {
    return await this.issueRepository.findOne(issue_id);
  }
}
