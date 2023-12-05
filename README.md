# react-is-online-context [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/react-is-online-context.svg)](https://badge.fury.io/js/react-is-online-context) [![Maintainability](https://api.codeclimate.com/v1/badges/182efedf2a8b7f1ac89c/maintainability)](https://codeclimate.com/github/lacymorrow/react-is-online-context/maintainability)

> Uses HTML5 `offline` and `online` events combined with the @Sindresorhus `is-online` package for accurate online/offline detection.

[**Storybook Demo**](https://www.chromatic.com/component?appId=6528a9ef83709c394594fc93&csfId=lacymorrow-react-is-online-context&buildNumber=5&k=6528ae3054fd2afdd25fb253-1200px-interactive-true&h=3&b=-1)

## Features

 * Uses `is-online` for accurate online/offline detection. 
 * Works just about everywhere `window` is available, including Node.js and Electron.
 * Does not require `navigator.onLine`
 * Works on both the client and server

 ## Install

Using [NPM](https://npmjs.com):

```bash
npm install react-is-online-context
```

## Usage

```js
import { GitHubReadme } from 'react-is-online-context'

// ...

;<GitHubReadme username='lacymorrow' repo='react-is-online-context' />

// or
// <GitHubReadme src="path/to/my/file.md />
```



## FAQ

### Why a React Context vs a hook?

A hook is reinitialized in every component that uses it. This means that if you have multiple components that use the hook, they will all have their own instance of the hook. A context is initialized once and can be used by multiple components.


### Why not use `navigator.onLine`?

`navigator.onLine` is not reliable. It only tells you if the browser is currently connected to the network. It does not tell you if the user is able to reach your site. For example, the user could be connected to a wifi network, but the wifi network could be down, or the ISP could be down. Often a virtual machine will report that it is online, but it is not able to reach the internet. `is-online` checks if the user is able to reach the internet by pinging a few different servers. This is a much more reliable way to check if the user is online.


## Credit

Thanks to [Sindresorhus](https://github.com/sindresorhus) for his [`is-online`](https://github.com/sindresorhus/is-online) package.

## License
[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)