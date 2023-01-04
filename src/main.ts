import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeORMSession } from './typeorm/entities/Session';
import { TypeormStore } from 'connect-typeorm';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT || 3000;
  app.useStaticAssets(join(__dirname, '..' , 'public'));
  app.setBaseViewsDir(join(__dirname, '..' , 'views'));
  app.setViewEngine('ejs');
  const sessionRepo = app
  .get(AppModule)
  .getDataSource()
  .getRepository(TypeORMSession);
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'dahdgasdjhsadgsajhdsagdhjd',
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepo),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
}
bootstrap();