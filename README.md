# Nodejs Express Prisma Stack with Next as frontend
A Node backend app powered by a powerful Nextjs frontend. It provides a perfect starter kit for 
simple apps that need quick development time, with an api-ready backend. This starter-kit is
perfect for apps that may start with a backend (React NAtive/Flutter) and later on provide a 
frontend via Nextjs.

### Stack & Features
Backend
- Express
- Prisma (Postgree, MySQl, Mongo)
- Typescript
- JWT
- Cors

Frontend
- Next (12) (React 18)
- Chakra UI (v2)
- Framer Motion
- React Query (Generally you won't need Redux - But do as you please)

WishList
- Tests
- One-click deployments

#### Alternative Stack
[Blitzjs](https://blitzjs.com/), which aims to be a full-stack Nextjs solution, can be a good alternative for your needs. 
However, there being no support for an easy way to use it as a pure-api backend for Flutter/React Native, it can become, well, not suitable for your stack. Till then, this project shall be kept active.

## First steps
### 0. Install the dependencies

`npm i`

> Tested on NodeJs v18+

### (Optional) Start a postgres docker container

`docker-compose up -d`

> Make a .env file based on the .env.example with you preferences
> Make a .env file based on the .env.example with you database settings inside prisma folder

#### 1. Migration

`npx prisma migrate dev --name initial-migration --create-only`

#### 2.Create database and tables

`npx prisma db push`

#### 3.Generate prisma files

`npx prisma generate`

#### 4. Seed data

`npm run seed`

#### 5.Generate a JWT Secrete

`npm run generate`

#### 6.Start the server (dev)

`npm run dev`

#### 7.Start the server (prod)

`npm run start`

###

> Check insomnia file (`docs`) for the view API documentation

## Security
### Testing
Check for `npm` packages. A better solution to `npm audit` is
```bash
snyk test
```


## Deploying
### Deploy on Custom Server
The app will run on 2 instances; one for the backend, the other for next. That is, if you really need a frontend in Next.

### Deploying with Docker
> Coming soon


## Contributions
PRs are welcome. Am no expert in any form, but would love to make a contribution to the society at large. Feel free to make your contributions - they will be much appreaciated.


## Credits
- [Lexx Yungcarter](mailto:lexxyungcarter@gmail.com)
- [AceLords](mailto:info@acelords.space) - [Website](https://acelords.space)

