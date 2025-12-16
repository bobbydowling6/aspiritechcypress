# Aspiritech Cypress Test Suite

Automated end-to-end tests for the Aspiritech website, implemented with Cypress.

## Overview
This repository contains Cypress test specs located in `cypress/e2e/` and supporting helpers in `cypress/support/` and `cypress/PageObjects/`.

## Quick start
Prerequisites:
- Node.js 18+ and npm

Install dependencies:
```bash
npm ci
```

Open Cypress (interactive):
```bash
npx cypress open
```

Run tests headless:
```bash
npx cypress run
```

## Clone this repository
HTTPS:
```bash
git clone https://github.com/bobbydowling6/aspiritechcypress.git
```

SSH:
```bash
git clone git@github.com:bobbydowling6/aspiritechcypress.git
```

If you already have a local repo and want to set `origin`:
```bash
git remote set-url origin https://github.com/bobbydowling6/aspiritechcypress.git
```

## Project layout
- `cypress/e2e/` — test specs
- `cypress/fixtures/` — fixtures
- `cypress/support/` — commands and helpers
- `cypress/screenshots/`, `cypress/videos/` — artifacts (ignored by `.gitignore`)

## CI
There is a GitHub Actions workflow at `.github/workflows/ci.yml` that runs `npm ci` and `npm test` on pushes and pull requests to `main`.

## Notes
- Large binaries should be managed with Git LFS. Consider installing and configuring Git LFS if you add large files.

## Contributing
Open issues or submit pull requests. When adding dependencies, update `package.json` and ensure CI passes.

License: see repository settings or add a `LICENSE` file.
# Aspiritech Cypress Test Suite

A collection of Cypress end-to-end tests for the Aspiritech website.

## Overview
This repository holds automated UI tests written with Cypress. Tests are organized under `cypress/e2e/` and use supporting helpers in `cypress/support/` and `cypress/PageObjects/`.

## Quick start
Prerequisites:
- Node.js 18+ and npm

Install dependencies:
```bash
npm ci
```

Open Cypress (interactive):
```bash
npx cypress open
```

Run tests headless:
```bash
npx cypress run
```

## Project structure (high level)
- `cypress/e2e/` — test specs organized by site area
- `cypress/fixtures/` — test fixtures
- `cypress/support/` — custom commands and page objects
- `cypress/screenshots/` and `cypress/videos/` — test artifacts (ignored by `.gitignore`)

## CI
This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml` that runs `npm ci` and `npm test` on pushes and pull requests to `main`.

## Repository
https://github.com/bobbydowling6/aspiritechcypress

**Git remote (origin):** https://github.com/bobbydowling6/aspiritechcypress.git

## Clone this repository
You can clone the project using HTTPS or SSH. Example commands:

HTTPS:
```bash
git clone https://github.com/bobbydowling6/aspiritechcypress.git
```

SSH:
```bash
git clone git@github.com:bobbydowling6/aspiritechcypress.git
```

If you already have a local repository and want to set `origin` to this GitHub repo:
```bash
git remote set-url origin https://github.com/bobbydowling6/aspiritechcypress.git
```

## Contributing
Open issues or submit pull requests to improve tests or add new cases. If you add dependencies, update `package.json` and ensure CI still passes.

## Notes
- Large binaries should be tracked via Git LFS. Consider running `git lfs` setup if you plan to add big files.

License: see repository settings for license information.
