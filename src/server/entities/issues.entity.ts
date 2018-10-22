import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Item } from './item.entity';
import { Change } from './change.entity';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  status: 'new' | 'confirmed' | 'rejected' | 'pending' | 'done';

  @Column()
  openDate: Date;

  @ManyToOne(type => Item, item => item.issues, { cascade: true })
  item: Item;

  @OneToMany(type => Change, change => change.issue)
  changes: Change[];
}
