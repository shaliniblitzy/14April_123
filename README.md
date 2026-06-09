# 14April_123

A minimal Node.js HTTP server built with the [Express.js](https://expressjs.com/) web framework. This tutorial-style project exposes two plain-text `GET` endpoints, each returning a fixed greeting.

## Prerequisites

- [Node.js](https://nodejs.org/) **>= 18** (required by Express 5)
- **npm** (bundled with Node.js)

## Installation

Install Express and its dependencies into a local `node_modules/` directory (which is git-ignored):

```bash
npm install
```

## Running the server

Start the server with the `start` script, which runs `node server.js`:

```bash
npm start
```

The server listens on port `3000` and is then available at `http://localhost:3000`. On startup it logs:

```text
Server is running on http://localhost:3000
```

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/evening` | `Good evening` |

### Examples

```bash
curl http://localhost:3000/         # -> Hello world
curl http://localhost:3000/evening  # -> Good evening
```
