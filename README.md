# momence-test

## Key features

### Client

- [Deployed here](https://momence-test-vlxp5wixua-uc.a.run.app/)
- Dockerized, deployed to [GCP Cloud Run](https://cloud.google.com/run) (on free tier so the server sleeps in downtime, hence slower start)
- Bootstrapped with [Vite](https://vitejs.dev/)
- Reads environment variables at runtime ([here](/client/src/api/context.tsx) and [here](/client/www/index.js))
- Uses [Zod](https://www.npmjs.com/package/zod) to parse API data [here](/client/src/api/context.tsx#L26)
- Uses [Cypress](https://www.cypress.io/) for end-to-end testing [Home.cy.ts](/client/cypress/e2e/Home.cy.ts)
- Uses ["feature folders"](https://profy.dev/article/react-folder-structure)
- Uses error boundary to catch errors

### Server

- [Deployed here](https://momence-test-server-vlxp5wixua-uc.a.run.app)
- Boostrapped with [NestJS](https://nestjs.com/) (a bit overkill for this but its generators save a lot of time)
- Enables CORS [only for the client origin](/server/src/main.ts#L9)
- Returns parsed currency data, the [parse function](/server/src/exchange-rates/parseExchangeRates.ts) has [100% test coverage](/server/src/exchange-rates/parseExchangeRates.spec.ts)

### Shared

- Uses Husky pre-commit and pre-push hooks to ensure pushed code is valid (ghetto CI)
- NPM workspaces not used at the end, had issues with deployment that were not worth spending time on
- I ended up skipping unit testing on the client due to [ridiculous Jest setup](https://hung.dev/posts/jest-vite) with Vite & SWC

### Exchange rates feature

- I did my own take on this, hopefully that's fine. The exchange amounts are computed for all rates simulatenously, the user can subsequently choose a currency from the dropdown to filter the results.
- The input field has [debounce built into it](/client/src/pages/Home/components/ExchangeAmountInput.tsx#L17), hence the business logic is [rather simple](/client/src/pages/Home/Home.page.tsx#L31)
- The Table uses `React.memo()` to optimize rendering (e.g. don't rerender when input value changes)
- Core logic thouroughly tested with Cypress [here](/client/cypress/e2e/Home.cy.ts)

## Getting started

Install dependencies:

```bash
npm i
```

Start dev servers, simulatenously or separately

```bash
npm run dev
npm run dev:server
npm run dev:client
```

Open Cypress UI, debug e2e tests (client app needs to be running)

```bash
npm run cy:open
```

Run all tests, simulatenously or separately

```bash
npm run test
```

Run tests separately

```bash
npm run test:server
npm run test:client
```
