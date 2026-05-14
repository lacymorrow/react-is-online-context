# Contributing to react-is-online-context

Thanks for considering a contribution!

## Setup

```bash
git clone https://github.com/lacymorrow/react-is-online-context.git
cd react-is-online-context
npm install
```

## Develop

```bash
npm run storybook         # Storybook on :6006
npm run rollup            # build to dist/
```

## Conventions

- [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`).
- Keep PRs focused; one logical change per PR.
- The library has two public surfaces: `IsOnlineContextProvider` / `IsOnlineContext` and the `useIsOnline` hook. Changes that break either are a major version bump.

## Releasing

```bash
npm run release            # rollup + npm publish
```

## Code of conduct

Be kind. Egregious behavior gets you removed.
