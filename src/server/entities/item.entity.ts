import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Issue } from './issues.entity';

@Entity()
export class Item {
  @PrimaryColumn()
  key: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @OneToMany(type => Issue, issue => issue.item)
  issues: Issue[];
}
