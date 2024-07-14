import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stream {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  title: string;

  @Column()
  state: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  preview: string;

  @Column()
  uploadedAt: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
