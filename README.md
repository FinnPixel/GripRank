# GripRank

A calisthenics app — find local calisthenics parks on an interactive map and track your skill progression through a visual skill tree.

## Features

- **Park map** — browse calisthenics parks on an interactive Leaflet map, with search/filter by name.
- **Skill tree** — track bodyweight skill progression (e.g. Push Up → Pike Push Up → Handstand Push Up) through a level-based tree with goals and XP.
- **Home & about pages** — landing page and project info.

## Tech stack

React 18, TypeScript, Vite, MUI + Emotion + styled-components, Leaflet / react-leaflet, ECharts, react-router-dom.

## Getting started

```bash
yarn install
yarn dev
```

Other scripts:

```bash
yarn build    # type-check and build for production
yarn lint     # run ESLint
yarn preview  # preview a production build locally
```

## Status

This is a frontend-only work in progress. The park list and skill tree currently run on static placeholder data (the app tries `/api/parks` first and falls back to a static list of Munich-area parks); a backend to serve live data hasn't been built yet.

## License

MIT — see [LICENSE](LICENSE).
