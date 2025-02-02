import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  phone: string;

  @Column('text')
  email: string;

  @Column()
  password: string;

  @Column()
  isActivated: boolean;
}
