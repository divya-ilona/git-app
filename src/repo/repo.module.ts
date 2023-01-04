import { Module } from '@nestjs/common';
import { RepoService } from './repo.service';
import { RepoController } from './repo.controller';
import { Octokit} from 'octokit';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports:[Octokit,AuthModule],
  controllers: [RepoController],
  providers: [RepoService]
})
export class RepoModule {}
