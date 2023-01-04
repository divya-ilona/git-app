import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, GithubAuthGuard } from 'src/auth/utils/Guards';

@Controller('auth')
export class AuthController {
  /**
   * GET /api/auth/login
   * This is the route the user will visit to authenticate
   */
  @Get('login')
  @UseGuards(GithubAuthGuard)
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * This is the redirect URL the OAuth2 Provider will call.
   */
  @Get('redirect')
  @UseGuards(GithubAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('https://git-app-production.up.railway.app/api/v1');
  }

  /**
   * GET /api/auth/status
   * Retrieve the auth status
   */
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  /**
   * GET /api/auth/logout
   * Logging the user out
   */
  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    //req.logOut();
  }
}