# AVI Bowling

Front-end example project for fictional bowling business

Live site - https://avi-bowling.edburtnieks.now.sh/

## Table of contents

- [Local development setup](#local-development-setup)
- [Testing](#testing)
- [Project documentation](#project-documentation)
- [Technologies and tools](#technologies-and-tools)

## Local development setup

### Setting up local environment

1. Clone / fork project and `cd` into it
2. Every new change should be started from staging branch `git checkout staging`
3. Install all dependencies `npm install`

To open development server localy run `npm run dev` and visit `localhost:3000`

To build the project for production run `npm run build`

To open production server localy run `npm start`

To check linting errors run `npm run lint`

### Adding new feature

1. Make sure you are on `staging` branch `git branch`
2. Create new branch from staging branch `git checkout -b <branch-name>`
3. Develop your new feature, improvement, bug-fix
4. Add all necesarry files to staging `git add <files>`
5. Make commit `git commit`
6. Push changes on GitHub `git push origin <branch-name>`
7. Create new pull request on GitHub setting base branch as `staging` and compare branch as `<branch-name>`

To get latest code changes locally run `git pull origin staging` while on `staging` or `<branch-name>` branch

To add all production ready features to master branch create new pull request on GitHub setting base branch as `master` and compare branch as `staging`

To deploy production ready code to live site run `now`

## Testing

To test with cypress run `npm run cy:open` or `npm run cy:run`

New tests can be added in [cypress/integration](./cypress/integration) directory

## Project documentation

[Project documentation, Structure, Guidelines](./documentation)

## Technologies and tools

Project boilerplate was generated using `npx degit sveltejs/template` command

- [Svelte](https://svelte.dev/) - Javascript compiler
- [Svelte Routing](https://github.com/EmilTholin/svelte-routing) - Routing solution
- [Express](https://expressjs.com/) - For serving static files and enabling SSR
- [PostCSS](https://postcss.org/) - For auto prefixing css rules
- [ESLint](https://eslint.org/) - For linting javascript and svelte files
- [Prettier](https://prettier.io/) - For code formatting
- [Cypress](https://www.cypress.io/) - For End to End testing
- [Percy](https://percy.io/) - For visual testing
