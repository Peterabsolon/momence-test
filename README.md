# momence-test

## Key features

### Client

- Bootstrapped with [Vite](https://vitejs.dev/)
- Dockerized, deployed to [GCP Cloud Run](https://cloud.google.com/run)
- Reads environment variables at runtime ([here](/client/src/api/context.tsx) and [here](/client/www/index.js))
- Uses [Zod](https://www.npmjs.com/package/zod) to parse API data [here](/client/src/api/context.tsx#L26)
- Uses [Cypress](https://www.cypress.io/) for end-to-end testing [Home.cy.ts](<[here](/client/cypress/e2e/Home.cy.ts)>)
- Uses ["feature folders"](https://profy.dev/article/react-folder-structure)
- Uses error boundary to catch errors

### Server

- Boostrapped with NestJS (a bit overkill for this but its generators save a lot of time)
- Feature folders

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

Start dev servers:

```bash
npm run dev
```

Optionally run dev servers separately:

```bash
npm run dev:server
npm run dev:client
```

Run all tests

```bash
npm run test
```

Run tests separately

```bash
npm run test:server
npm run test:client
```
