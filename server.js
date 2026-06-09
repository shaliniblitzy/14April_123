/**
 * server.js — Express.js Application Entry Point
 *
 * Minimal Node.js HTTP server built on the Express.js web framework. This is the
 * runtime entry point of the project: it is referenced by package.json's `main`
 * field and launched by the `start` script (`node server.js`).
 *
 * The server exposes two plain-text `GET` endpoints, each returning a fixed greeting:
 *   - GET /         -> "Hello world"   (the original, behavior-preserved response)
 *   - GET /evening  -> "Good evening"  (the new endpoint)
 *
 * Design notes:
 *   - Module system is CommonJS (`require`), not ESM.
 *   - Routing is declarative via `app.get(path, handler)`; responses are emitted
 *     with Express's `res.send(...)` helper (which sets Content-Type, Content-Length,
 *     and ETag automatically). No manual `req.url` branching or `res.writeHead`/`res.end`.
 *   - A single listener binds port 3000.
 *
 * @see https://expressjs.com/ — Express.js documentation
 */

'use strict';

// Import the Express.js web framework. `express` is the only runtime dependency;
// it is declared in package.json and installed into node_modules/ via `npm install`.
const express = require('express');

// Create the Express application instance. `app` acts as the central request
// dispatcher (front controller), replacing the native `http.createServer` handler.
const app = express();

// The TCP port the HTTP server listens on. Kept as a named constant so the value
// has a single source of truth and is easy to locate.
const port = 3000;

// Root endpoint: respond to `GET /` with the exact string "Hello world".
// This preserves the original server's response contract byte-for-byte (11 bytes).
app.get('/', (req, res) => res.send('Hello world'));

// Evening endpoint: respond to `GET /evening` with the exact string "Good evening"
// (12 bytes). This is the net-new endpoint added in this migration.
app.get('/evening', (req, res) => res.send('Good evening'));

// Bind the application to the configured port and start accepting connections.
// The callback logs a readiness message once the server is listening.
app.listen(port, () => console.log('Server is running on http://localhost:3000'));
