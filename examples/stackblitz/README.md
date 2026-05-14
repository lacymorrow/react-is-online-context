# react-is-online-context — StackBlitz demo

A minimal Vite + React + TypeScript app that wraps the tree in `<IsOnlineContextProvider />` and reads the live `{ isOnline, isLoading, error }` state via `useContext(IsOnlineContext)`.

## Open it live

➔ **[Open in StackBlitz](https://stackblitz.com/github/lacymorrow/react-is-online-context/tree/main/examples/stackblitz?file=src/Status.tsx)**

## Run locally

```bash
cd examples/stackblitz
npm install
npm run dev
```

## What to look at

- `src/main.tsx` — wraps the app in the provider with a 5-second `is-online` timeout.
- `src/Status.tsx` — consumes the context and renders a status pill.

Toggle your DevTools network to "Offline" to see the pill flip.
