import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, GithubAuthGuard } from 'src/auth/utils/Guards';
import { UseFilters } from '@nestjs/common';
import { ViewAuthFilter } from 'src/utils/exception';


@Controller('auth')
export class AuthController {
  /**
   * GET /api/auth/login
   * This is the route the user will visit to authenticate
   */
  @Get('login')
  @UseFilters(ViewAuthFilter)
  @UseGuards(GithubAuthGuard)
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * This is the redirect URL the OAuth2 Provider will call.
   */
  @Get('redirect')
  @UseFilters(ViewAuthFilter)
  @UseGuards(GithubAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('/');
  }

  /**
   * GET /api/auth/status
   * Retrieve the auth status
   */
  @Get('status')
  @UseFilters(ViewAuthFilter)
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  /**
   * GET /api/auth/logout
   * Logging the user out
   */
  @Get('logout')
  @UseFilters(ViewAuthFilter)
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    //req.logOut();
  }
}