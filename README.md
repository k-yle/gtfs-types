# gtfs-types

[![Build Status](https://github.com/k-yle/gtfs-types/workflows/build/badge.svg)](https://github.com/k-yle/gtfs-types/actions)
[![npm version](https://badge.fury.io/js/gtfs-types.svg)](https://badge.fury.io/js/gtfs-types)

This package exposes TypeScript type definitions for the [GTFS](https://developers.google.com/transit/gtfs) Standard and the [GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/reference) Standard.

# Usage

Install the package from npm:

```sh
npm install -D gtfs-types
```

Usage:

```ts
import { Route } from "gtfs-types";

const myRoute: Route = {
  route_id: "abc123",
  route_short_name: "24",
  route_long_name: "Crofton Downs to Box Hill",
};
```

If you use typescript 3.8+ you can also use the type-only import syntax:

```ts
import type { Route } from "gtfs-types";
```

For a list of all types, see the [src](https://github.com/k-yle/gtfs-types/tree/master/src) folder.
