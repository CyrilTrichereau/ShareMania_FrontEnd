// Imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./apiRouter").router;

//Instantiate server
const server = express();

// Body Parser Configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Configures routes
server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Welcome to Sharemania API</h1>");
});

server.use("/api/", apiRouter);

// Launch server
server.listen(8080, () => {
  console.log(" ---- Serveur en écoute ---- ");
});
