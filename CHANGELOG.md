# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Centered README hero, logo (teal wifi-signal on rounded square), 5 modern badges (incl. Storybook).
- README comparison table vs `react-detect-offline`, `react-use`'s `useNetworkState`, and raw `navigator.onLine`.
- StackBlitz playground (`examples/stackblitz/`) — minimal Vite + React + TS demo of provider + hook consumer.
- `.github/` community files: FUNDING, dependabot, ISSUE_TEMPLATE, PR template, SECURITY, CONTRIBUTING.
- CI smoke-test workflow on Node 18/20/22.
- Branded 1280×640 social preview banner.
- CodeQL security scanning + Dependabot auto-merge workflow.

### Changed

- README clarified: provider forwards only `timeout` / `ipVersion`; hook works standalone but each call spins its own polling loop (the context's purpose is to broadcast a single shared value).
- npm keywords pruned (removed generic noise like `is` / `has` / `no`) and aligned around `react-hook` / `react-context`.

## [1.0.2] and earlier

For pre-1.0.2 history, see [`git log`](https://github.com/lacymorrow/react-is-online-context/commits/main).

[Unreleased]: https://github.com/lacymorrow/react-is-online-context/compare/v1.0.2...HEAD
