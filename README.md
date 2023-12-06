# react-is-online-context [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/react-is-online-context.svg)](https://badge.fury.io/js/react-is-online-context) [![Maintainability](https://api.codeclimate.com/v1/badges/182efedf2a8b7f1ac89c/maintainability)](https://codeclimate.com/github/lacymorrow/react-is-online-context/maintainability)

> Uses HTML5 `offline` and `online` events combined with the @Sindresorhus [`is-online`](https://github.com/sindresorhus/is-online) package for accurate online/offline detection.

[**Storybook Demo**](https://www.chromatic.com/component?appId=656fd301733d4955d5e63a3a&csfId=lacymorrow-react-is-online-context--use-is-online-hook&buildNumber=1&k=656fd32439eb488a7da22dfc-1200px-interactive-true&h=9&b=0)

## Features

 * Uses [`is-online`](https://github.com/sindresorhus/is-online) for accurate online/offline detection.
 * Works just about everywhere `window` is available, including Electron.
 * Does not require `navigator.onLine`
 * Works on both the client and server

 ## Install

Using [NPM](https://npmjs.com):

```bash
npm install react-is-online-context
```

## Usage

```js
import { IsOnlineContextProvider } from "react-is-online-context";
import { ComponentUsingContext } from "./ComponentUsingContext";



const AppComponent = () => {

	// See is-online for options: https://github.com/sindresorhus/is-online
	const options = {
		// timeout: 5000,
	};

	return (
		<IsOnlineContextProvider {...options}>
			<ComponentUsingContext />
		</IsOnlineContextProvider>
	);
};

// ./ComponentUsingContext
import { IsOnlineContext } from "react-is-online-context";

export const ComponentUsingContext = (props) => {
	const { isOnline, isLoading, error } = React.useContext(IsOnlineContext);

	return (
		<div>
			{isOnline ? "You are online" : "You are offline"}
		</div>
	);
};
```


### Usage with React Hooks

```js
import { useIsOnline } from "react-is-online-context";


export const ComponentUsingHooks = (props) => {
	const { isOnline, isLoading, error } = useIsOnline();

	return (
		<div>
			{isOnline ? "You are online" : "You are offline"}
		</div>
	);
};
```

## API

### `IsOnlineContextProvider`

The `IsOnlineContextProvider` component is a React Context Provider that provides the `IsOnlineContext` to all of its children.

### `IsOnlineContext`

The `IsOnlineContext` is a React Context that provides the following values:

 * `isOnline` - A boolean indicating if the user is online or not.
 * `isLoading` - A boolean indicating if the `isOnline` value is still being determined.
 * `error` - An error object if there was an error determining the `isOnline` value.

### `useIsOnline` hook

The `useIsOnline` hook provides the same values as the `IsOnlineContext`:

 * `isOnline` - A boolean indicating if the user is online or not.
 * `isLoading` - A boolean indicating if the `isOnline` value is still being determined.
 * `error` - An error object if there was an error determining the `isOnline` value.


## FAQ

### Why a React Context vs a hook?

A hook is reinitialized in every component that uses it. This means that if you have multiple components that use the hook, they will all have their own instance of the hook. A context is initialized once and can be used by multiple components.


### Why not use `navigator.onLine`?

`navigator.onLine` is not reliable. It only tells you if the browser is currently connected to the network. It does not tell you if the user is able to reach your site. For example, the user could be connected to a wifi network, but the wifi network could be down, or the ISP could be down. Often a virtual machine will report that it is online, but it is not able to reach the internet. `is-online` checks if the user is able to reach the internet by pinging a few different servers. This is a much more reliable way to check if the user is online.


## Credit

Thanks to [Sindresorhus](https://github.com/sindresorhus) for his [`is-online`](https://github.com/sindresorhus/is-online) package.

## License
[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
