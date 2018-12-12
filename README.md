# API Service Example

Example of API following architecture, design and coding best practices of Goomer development team.

## Table of Contents

+ [Requisites](#requisites)
+ [Usage](#usage)
+ [Environment Examples](#environment-examples)
+ [Development](#development)

+ ## Requisites

+ [Git](https://git-scm.com/downloads/)
+ [Node.js - LTS](https://nodejs.org/en/download/)

## Usage

```console
$ git clone https://github.com/goomerdev/clean-api-boilerplate
$ cd clean-api-boilerplate
```
Adjust setting in *.env-example* and continue:

## Environment Examples

As described on *.env-example*, here are the expected configurations to a sucessful service execution:

```env
NODE_ENV=development
PORT=3001
SECRET=my-secret
```
```console
$ cp .env-example .env
$ npm i && npm start
```

## Development

This project has a commit hook already configured that will run [Eslint](https://github.com/eslint/eslint) based on [Airbnb JavsScript Style Guide](https://github.com/airbnb/javascript) and [Prettier](https://github.com/prettier/prettier) to provide with uniform and formated code style.

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure as follows:

![Image of Layers](http://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Directory Structure

```
.
├── src
│   ├── 1-domain
│   │   └── entities
│   ├── 2-application
│   │   ├── index.js
│   │   ├── services
│   │   └── useCases
│   ├── 3-interfaces
│   │   └── controllers
│   │       └── testController.js
│   ├── 4-infrastructure
│   │   ├── api
│   │   │   ├── router.js
│   │   │   ├── routes.js
│   │   │   └── server.js
│   │   ├── database
│   │   │   └── models
│   │   │       └── index.js
│   │   └── logger
│   │       └── index.js
│   ├── config.js
│   ├── container.js
│   └── index.js
└── test
│   └── example.test.js
├── .env-example
├── .babelrc
├── .eslintrc
├── .gitignore
├── README.md
├── jest.config.js
├── package.json
└── package-lock.json

```
