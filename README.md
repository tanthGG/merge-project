# mergesort-typescript

A TypeScript implementation of a three-array merge function, with Jest unit tests.

## Repository Structure

| Path | Purpose |
|---|---|
| `src/merge.ts` | Implementation of the `merge` function |
| `test/merge.test.ts` | Jest unit tests |
| `jest.config.js` | Jest configuration (ESM + ts-jest) |
| `tsconfig.json` | TypeScript configuration |

## Prerequisites

Node.js v18 or later is required. Verify with:

```bash
node --version
npm --version
```

## Install Dependencies

```bash
npm install
```

This installs:

| Package | Purpose |
|---|---|
| `typescript` | TypeScript compiler |
| `jest` | Test runner |
| `ts-jest` | Runs `.ts` files directly in Jest |
| `@types/jest` | Type definitions for Jest globals (`describe`, `it`, `expect`) |

## Run Unit Tests

```bash
npm test
```

Expected output:

```
PASS  test/merge.test.ts
  merge
    typical cases
      ✓ merges three sorted arrays with interleaved values
      ✓ merges three sorted non-overlapping arrays in order
      ✓ merges three sorted arrays of different lengths
    empty array cases
      ✓ returns empty array when all three inputs are empty
      ...
    duplicate values
      ✓ preserves all duplicates across arrays
      ...

Test Suites: 1 passed, 1 total
Tests:       XX passed, XX total
```

## Type-check Without Running Tests

```bash
npx tsc --noEmit
```

## How It Works

The `merge` function accepts three arrays with the following contract:

- `collection_1` — sorted ascending
- `collection_2` — sorted **descending** (reversed internally before merging)
- `collection_3` — sorted ascending

It returns a single sorted ascending array combining all three inputs.
