//require dotenv and give the path
require("dotenv").config("../.env");
const express = require("express");
const { notFound, globalErrorHandler } = require("./error");
const middleware = require("./middleware");
const { route } = require("./routes");

const app = express();

// Initialization Global Middleware
app.use(middleware);
app.use(route);
app.use(notFound);
app.use(globalErrorHandler);

module.exports = app;
