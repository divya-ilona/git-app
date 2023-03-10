import { Controller, Get, Post, Body, Param, Res, Render,Req,UseGuards } from '@nestjs/common';
import { RepoService } from './repo.service';
import { CreateRepoDto } from './dto/create-repo.dto';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/typeorm';
import { UseFilters } from '@nestjs/common';
import { ViewAuthFilter } from 'src/utils/exception';



export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);


@Controller('new-repo')
export class RepoController {

  constructor(private readonly repoService: RepoService) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  @UseFilters(ViewAuthFilter)
  @Render('status')
  create(@Body() createRepoDto: CreateRepoDto,@GetUser() user: User) {
     return this.repoService.create(createRepoDto,user.accessToken);
  }

}
