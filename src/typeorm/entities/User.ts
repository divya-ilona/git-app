import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'github_id', unique: true })
  githubId: string;

  @Column()
  username: string;

  @Column({ name: 'access_token' })
  accessToken: string;

}