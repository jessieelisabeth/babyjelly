# BabyJelly
BabyJelly is a small key-value database built in Node.js from scratch. 
## Current features
Supports:
`set`, `get`, `delete`, `save`, `exit`, `compact`.
BabyJelly uses an append-only JSONL log, replays operations on startup, and supports log compaction.

## Usage

Run BabyJelly with Node.js:

`node babyjelly.js`

## Example

```text
$ node babyjelly.js
babyjellyDB loaded from babyjelly.jsonl

babyjelly> set animal jellyfish
babyjelly> set animal octopus
babyjelly> set animal squid
babyjelly> set color pink
babyjelly> delete color
babyjelly> compact
you've compacted babyjelly data! feels good to start fresh!
babyjelly> exit
goodnight babyjelly!

$ node babyjelly.js
babyjellyDB loaded from babyjelly.jsonl
babyjelly> get animal
squid
babyjelly> get color
undefined
```

## Project Goal

BabyJelly exists as a project for learning how databases store and retrieve data. It is intended as a precursor to Jellyfish, a future C++ implementation.
