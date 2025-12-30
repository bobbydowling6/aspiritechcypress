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
npm run cypress:open
# or
npx cypress open
```

Run tests headless:
```bash
npm test
# or
npm run cypress:run
# or
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
- `cypress/e2e/` — test specs organized by site area
- `cypress/fixtures/` — test fixtures
- `cypress/support/` — custom commands and page objects
- `cypress/screenshots/`, `cypress/videos/` — artifacts (ignored by `.gitignore`)

## CI
This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml` that runs `npm ci` and `npm test` on pushes and pull requests to `main`.

## Repository
https://github.com/bobbydowling6/aspiritechcypress

**Git remote (origin):** https://github.com/bobbydowling6/aspiritechcypress.git

## Contributing
Open issues or submit pull requests to improve tests or add new cases. When adding dependencies, update `package.json` and ensure CI still passes.

## Notes
- Large binaries should be tracked via Git LFS. Consider running `git lfs` setup if you plan to add big files.

License: see repository settings for license information.
