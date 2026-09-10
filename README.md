# BabyJelly
BabyJelly is a small key-value database built in Node.js from scratch. 
## Current features
Supports:
`set`, `get`, `delete`, `save`, `exit`.
BabyJelly persists changes to disk between sessions using an append-only JSONL log.

## Usage

Run BabyJelly with Node.js:

`node babyjelly.js`

## Example

```text
babyjelly> set animal jellyfish
babyjelly> save
babyjellyDB saved to babyjelly.json
babyjelly> exit
goodnight babyjelly!

$ node babyjelly.js
babyjellyDB loaded from babyjelly.json
babyjelly> get animal
jellyfish
```

## Project Goal

BabyJelly exists as a project for learning how databases store and retrieve data. It is intended as a precursor to Jellyfish, a future C++ implementation.
