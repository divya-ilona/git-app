import { Profile, Strategy } from 'passport-github2';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationProvider } from '../service/auth/auth';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService: AuthenticationProvider,
  ) {
    super({
      clientID: 'Iv1.3bb5ff55784aad8f',
      clientSecret: 'f063597ac3532c5afd40762db914c11ebc3d4dd9',
      callbackURL: 'http://localhost:3000/api/v1/auth/redirect',
      scope: ["read:user"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { username, id: githubId } = profile;
    const details = {
      username,
      githubId,
      accessToken
    };
    return this.authService.validateUser(details);
  }
}