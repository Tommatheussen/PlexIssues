import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Issue } from './issues.entity';
import { Metadata } from './metadata.entity';

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

  @OneToOne(type => Metadata)
  metadata: Metadata;
}
