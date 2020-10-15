# Movies List

Simple website for creating Movies list of movies.

- Ruby version: `2.7.0`
- Rails version: `6.0.3`
- Database: `postgresql`
- React version: `16.14.0`
- React Hooks API

## Prepare project

1. Install [rails](https://rubyonrails.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. run `git clone git@github.com:adil2604/movies-list.git` and change dir to `cd movies-list`
3. change dir to `api` and run `bundle install`
4. run `rails db:setup && rails db:migrate`
5. change dir to `front` then run `npm install` or `yarn install`

## Run project locally

1. change dir to `api`, run `rails s`
2. change dir to `front`, run in another terminal `npm run start`
3. navigate to `http://localhost:3006`
