<div align="center">
  <a href="https://github.com/lacymorrow/react-is-online-context">
    <img src=".github/assets/logo-horizontal.svg" alt="react-is-online-context" width="420">
  </a>

  <p><strong>Reliable online/offline detection for React</strong> ➔ context provider + hook, powered by <a href="https://github.com/sindresorhus/is-online"><code>is-online</code></a>.</p>

  <p>
    <a href="https://www.npmjs.com/package/react-is-online-context"><img alt="npm version" src="https://img.shields.io/npm/v/react-is-online-context?style=flat"></a>
    <a href="https://www.npmjs.com/package/react-is-online-context"><img alt="npm downloads" src="https://img.shields.io/npm/dm/react-is-online-context?style=flat"></a>
    <a href="https://github.com/lacymorrow/react-is-online-context/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/lacymorrow/react-is-online-context/ci.yml?style=flat&label=CI"></a>
    <a href="./LICENSE"><img alt="License" src="https://img.shields.io/npm/l/react-is-online-context?style=flat"></a>
    <a href="https://www.chromatic.com/component?appId=656fd301733d4955d5e63a3a&csfId=lacymorrow-react-is-online-context--use-is-online-hook"><img alt="Storybook" src="https://img.shields.io/badge/Storybook-demo-ff4785?style=flat"></a>
  </p>
</div>

---

> [!NOTE]
> `navigator.onLine` lies. It tells you the browser thinks it has a network connection, not whether your app can reach the internet. This library uses [`is-online`](https://github.com/sindresorhus/is-online) — which actually pings real endpoints — so you can trust the answer.

## Features

- **Context provider** — initialized once, shared across the tree (no duplicated polls)
- **`useIsOnline` hook** — call from any component, same data
- Built on [`is-online`](https://github.com/sindresorhus/is-online) for accuracy
- Listens to HTML5 `online` / `offline` events for instant updates
- Works in **Electron**, **Next.js** (client + server), and the browser
- Exposes `{ isOnline, isLoading, error }`
- Written in TypeScript with type definitions

## Install

```bash
npm install react-is-online-context
```

## Usage

### Context + consumer

```jsx
import { IsOnlineContextProvider } from "react-is-online-context";

const App = () => {
  // See `is-online` for available options.
  const options = { timeout: 5000 };

  return (
    <IsOnlineContextProvider {...options}>
      <YourApp />
    </IsOnlineContextProvider>
  );
};
```

```jsx
import { useContext } from "react";
import { IsOnlineContext } from "react-is-online-context";

const StatusBar = () => {
  const { isOnline, isLoading, error } = useContext(IsOnlineContext);
  if (isLoading) return null;
  if (error)     return <span>Could not check</span>;
  return <span>{isOnline ? "Online" : "Offline"}</span>;
};
```

### Hook (same data, sugar)

```jsx
import { useIsOnline } from "react-is-online-context";

const StatusBar = () => {
  const { isOnline } = useIsOnline();
  return <span>{isOnline ? "Online" : "Offline"}</span>;
};
```

> [!TIP]
> Live, interactive demo on [Chromatic / Storybook](https://www.chromatic.com/component?appId=656fd301733d4955d5e63a3a&csfId=lacymorrow-react-is-online-context--use-is-online-hook).

## API

### `<IsOnlineContextProvider />`

Wraps your tree and supplies `IsOnlineContext`. Accepts any [`is-online` options](https://github.com/sindresorhus/is-online#options) — they're forwarded directly.

### `IsOnlineContext`

A React context whose value is:

| Field | Type | Description |
|---|---|---|
| `isOnline` | `boolean` | Whether the app can reach the internet |
| `isLoading` | `boolean` | First check still in progress |
| `error` | `Error \| null` | Set if the last check threw |

### `useIsOnline()` hook

Returns the same `{ isOnline, isLoading, error }` shape. Must be called inside an `<IsOnlineContextProvider />`.

## FAQ

<details>
<summary><strong>Why a context instead of just a hook?</strong></summary>

A hook is re-initialized in every component that uses it. Three components → three independent polling loops. The context initializes once and broadcasts the result to every consumer. Cleaner network behavior and consistent state.
</details>

<details>
<summary><strong>Why not just <code>navigator.onLine</code>?</strong></summary>

`navigator.onLine` only reports whether the browser has *some* network interface attached. A laptop on a Wi-Fi network with no internet upstream will still report `true`. VMs lie about it. Captive portals lie about it. `is-online` pings real endpoints and gives you a real answer.
</details>

<details>
<summary><strong>Does it work in SSR / Next.js?</strong></summary>

Yes. The provider gracefully no-ops on the server (no `window`), and the first client render kicks off the actual check.
</details>

## Related

- [`is-online`](https://github.com/sindresorhus/is-online) — the underlying detection library.
- Other utilities by the author: [shipx](https://github.com/lacymorrow/shipx) · [album-art](https://github.com/lacymorrow/album-art) · [movie-info](https://github.com/lacymorrow/movie-info).

## Acknowledgments

- [@sindresorhus](https://github.com/sindresorhus) for [`is-online`](https://github.com/sindresorhus/is-online) — does all the real work.

## License

[MIT](./LICENSE) © [Lacy Morrow](https://lacymorrow.com)

<div align="center">
  <sub>If this saved you time, consider <a href="https://github.com/sponsors/lacymorrow">sponsoring on GitHub</a>, <a href="https://patreon.com/lacymorrow">supporting on Patreon</a>, or <a href="https://buymeacoffee.com/lm">buying a coffee</a>.</sub>
</div>
