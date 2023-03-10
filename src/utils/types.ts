import { User } from '../typeorm';

export type UserDetails = {
  username: string;
  githubId: string;
  // avatar: string;
  accessToken: string;
  // refreshToken: string;
};

export type Done = (err: Error, user: User) => void;