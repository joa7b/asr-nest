import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  BaseEntity,
} from 'typeorm';

export enum SubscriptionRole {
  ADMIN = 'admin',
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium',
}

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'email',
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    name: 'first_name',
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  lastName: string;

  @Column({
    name: 'birth_date',
    nullable: false,
    type: 'timestamp',
  })
  birthdate: Timestamp;

  @Column({
    name: 'subscription',
    type: 'enum',
    enum: SubscriptionRole,
    default: SubscriptionRole.FREE,
  })
  subscription: string;

  @Column({
    name: 'biography',
    type: 'text',
    nullable: true,
  })
  biography: string;

  @Column({
    name: 'ddd',
    nullable: false,
    type: 'varchar',
    length: 2,
  })
  ddd: string;

  @Column({
    name: 'phone',
    nullable: false,
    type: 'varchar',
    length: 255,
    unique: true,
  })
  phone: string;

  @Column({
    name: 'avatar',
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  avatar: string;

  @Column({
    name: 'subscription_expires_at',
    nullable: true,
    type: 'timestamp',
  })
  subscriptionExpiresAt: Timestamp;

  @Column({
    name: 'created_at',
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Timestamp;

  @Column({
    name: 'updated_at',
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Timestamp;

  @Column({
    name: 'deleted_at',
    nullable: true,
    type: 'timestamp',
  })
  deletedAt: Timestamp;
}
