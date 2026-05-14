<!-- Thanks for the PR! Quick checklist below. -->

## Summary

<!-- What does this change, and why? -->

## How to test

```bash
npm install --ignore-scripts
npm run rollup     # builds dist/cjs, dist/esm, dist/index.d.ts
npm run storybook  # interactive testing on :6006
```

## Checklist

- [ ] `npm run rollup` builds without error
- [ ] Updated the README if a public prop changed
- [ ] PR is focused (one logical change)
