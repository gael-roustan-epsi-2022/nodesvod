const express = require("express");
const app = express();

app.get("/myfavoritefilm", function(req, res) {
  res.status(200).json({ movie: "Interstellar" });
});

module.exports = app;