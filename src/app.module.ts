import { Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './repo/repo.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './typeorm';
import { ConfigModule } from '@nestjs/config';
import { ViewAuthFilter } from './utils/exception';


let envFilePath='.development.env';
if(process.env.ENVIRONMENT==='PRODUCTION')
  envFilePath='.env.production';
console.log(`env in ${process.env.SQLite_DB_NAME}`);


@Module({
  imports: [
    RepoModule, 
    AuthModule,
    TypeOrmModule.forRoot({
    type :"sqlite",
    database: "devDB.sqlite",
    entities,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService,ViewAuthFilter],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}

  getDataSource() {
    return this.dataSource;
  }
}
