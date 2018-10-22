import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Metadata {
  @PrimaryColumn()
  key: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  summary: string;

  @Column()
  tagline: string;

  @Column()
  itemKey: string;

  @OneToOne(type => Item)
  @JoinColumn()
  item: Item;
}
