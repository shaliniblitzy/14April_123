// server.js
// Node.js tutorial server using Express.js
// Hosts two endpoints: "Hello world" and "Good evening"
const express = require('express');
const app = express();
const port = 3000;

// GET / - Returns "Hello world" response
app.get('/', (req, res) => {
  res.send('Hello world');
});

// GET /evening - Returns "Good evening" response
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}`
  );
});
