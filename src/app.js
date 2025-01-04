require('dotenv').config();
const express = require("express");
const routes = require('./routes');
const path = require("path");

const app = express();

// Add middleware before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register all routes
app.use('/', routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
