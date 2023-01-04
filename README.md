


##  Tech stacks used

#### Frontend

- Embedded Javascript(EJS)

#### Backend

- Nestjs
- Express
- passportjs
- octokit
- TypeORM

#### Authentication

- GithubOath2

#### Database

- SQLite

#### Hosting
- Railway




### Guide for local deployment -
1. Clone the repository.
```
git clone https://github.com/divya-ilona/git-app.git
```
2.Change the working directory
```
cd git-app
```
3.Install dependencies
```
npm install
```
4. Create your OAuth App through Developer Setting of your github accout.
5. Create your own Client Id and secret and paste in github strategy.
6. Change callback url to localhost in repo service.
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



