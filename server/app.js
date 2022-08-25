const path = require("path");
const express = require("express");
const app = express();
const db = require(".knex.js");

app.use(express.static(path.resolve(__dirname, "/build")));

module.exports = app;
