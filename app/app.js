const express = require("express");
const app = express();

app.get("/health", (_req, res, _next) => {
  res.status(200).json({ message: "Success" });
});

module.exports = app;
