import { AppService } from './app.service';
import { Controller, Get, Req, Res, UseGuards,Render,SerializeOptions } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, GithubAuthGuard } from 'src/auth/utils/Guards';
import { UseFilters } from '@nestjs/common';
import { ViewAuthFilter } from './utils/exception';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './typeorm';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseFilters(ViewAuthFilter)
  @UseGuards(AuthenticatedGuard)
  status(@GetUser() user: User) {
    return {UserName:user.username};
  }


  @Get('signin')
  signIn(@Res() res:Response){
    res.render("signIn");
  }
  


}
