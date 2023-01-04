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
      clientID: '4c8c52b25117de51855d',
      clientSecret: '2b5698fb2bc382d1d4efd57afd476abfb407f249',
      callbackURL: 'https://git-app-production.up.railway.app/auth/redirect',
      scope: ["read:user,repo,public_repo"],
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