import { Injectable } from '@nestjs/common';
import { CreateRepoDto } from './dto/create-repo.dto';
import { Octokit } from 'octokit';

@Injectable()
export class RepoService {

  async create(createRepoDto:CreateRepoDto,access_token:string) {
    const octokit = new Octokit({
      auth: access_token
    })
    try{
      await octokit.request('POST /user/repos', {
        name: createRepoDto.reponame,
        description: createRepoDto.description,
        homepage: 'https://github.com',
        'private': false,
        auto_init:true
      })
      return {message:"Repository Created Successfully!!"};
    }
    catch(err){
      return {message:err.message};
    }
  }

}
