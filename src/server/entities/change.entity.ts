import { Entity, PrimaryColumn, Column, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Issue } from './issues.entity';

@Entity()
export class Change {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  old_state: 'new' | 'confirmed' | 'rejected' | 'pending' | 'done';

  @Column()
  new_state: 'new' | 'confirmed' | 'rejected' | 'pending' | 'done';

  @Column()
  comment: string;

  @ManyToOne(type => Issue, issue => issue.changes)
  issue: Issue;
}
