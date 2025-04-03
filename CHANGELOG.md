# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 5.1.0 (2025-04-03)

- add `NonStringDataTypes` as a runtime-level export

## 5.0.0 (2025-03-13)

- mark many realtime properties as optional
- add table-to-schema map and primary key map
- fix types for realtime service alerts
- add a type aliases for each kind of ID
- fix two typos in enum values
- add many new tables based on the latest version of the spec

## 4.0.0 (2024-05-18)

- fix: convert `stop_time_update` to an array. The previous definition was not correct.

## 3.0.0 (2023-08-23)

- chore: replace [problematic](https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls) `const enum`s with normal `enums`, to support [`isolatedModules`](https://typescriptlang.org/tsconfig#isolatedModules) mode

## 2.3.0 (2023-08-23)

- feat: add GTFS v3 types

## 2.2.0 (2021-08-31)

- feat: add types for Realtime Service Alerts

## 2.1.0 (2021-08-14)

- fix: Trip, StopTime, Shapes, Frequencies: Make some fields optional

## 2.0.0 (2021-07-27)

- feat: add new properties like `continuous_pickup` and `platform_code`
- 💥 BREAKING CHANGE: mark some properties as optional as per the GTFS spec

## 1.0.2 (2020-08-27)

- feat: export vehicle-types
- chore: add unit tests

## 1.0.1 (2020-05-13)

- fix: unknown enum

## 1.0.0 (2020-05-13)

- Initial release
