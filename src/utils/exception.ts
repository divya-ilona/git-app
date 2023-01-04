import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { UnauthorizedException, ForbiddenException } from '@nestjs/common';
  
  @Catch(UnauthorizedException,ForbiddenException)
  export class ViewAuthFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const status = exception.getStatus();
  
      response.status(status).redirect('/api/v1/signin');
    }
  }